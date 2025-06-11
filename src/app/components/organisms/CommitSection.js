import React, { useEffect, useState } from 'react';
import { fetchCommitAnalysis } from '../../api/commit';
import CommitChart from '../atoms/CommitChart';

function CommitSection({ username, days }) {
    const [commitData, setCommitData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;

        setLoading(true);
        fetchCommitAnalysis(username, days)
            .then(data => {
                console.log('API response:', data);
                const commits = data.dailyCommitCounts || data.data || data;

                const chartData = Object.entries(commits).map(([date, count]) => ({
                    date,
                    count,
                }));

                console.log('chartData:', chartData);
                setCommitData(chartData);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [username, days]);


    if (loading) return <p>커밋 데이터 로딩 중...</p>;
    if (error) return <p>커밋 데이터를 불러오는 중 오류 발생: {error.message}</p>;
    if (commitData.length === 0) return <p>커밋 데이터가 없습니다.</p>;

    return (
        <div>
            <h2>커밋 분석 (최근 {days}일)</h2>
            <CommitChart data={commitData} />
        </div>
    );
}

export default CommitSection;
