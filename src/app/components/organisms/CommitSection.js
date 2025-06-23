import React, { useEffect, useState } from 'react';
import { fetchCommitAnalysis } from '../../api/commit';
import CommitChart from '../atoms/CommitChart';
import Text from '../atoms/Text';
import CatTagMessage from '../molecules/CatTagMessage';

function CommitSection({ username, days }) {
    const [commitData, setCommitData] = useState([]);
    const [peakHour, setPeakHour] = useState(null);
    const [peakHourCommitCount, setPeakHourCommitCount] = useState(null);
    const [topTag, setTopTag] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;

        setLoading(true);
        fetchCommitAnalysis(username, days)
            .then(data => {
                const commits = data.dailyCommitCounts || data.data || data;

                const chartData = Object.entries(commits).map(([date, count]) => ({
                    date,
                    count,
                }));

                setCommitData(chartData);
                setPeakHour(data.peakHour ?? null);
                setPeakHourCommitCount(data.peakHourCommitCount ?? null);
                setTopTag(data.tags?.[0] ?? null);
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
            <Text>👉 최근 {days}일 분석</Text>

            {topTag && (
                <div style={{ marginBottom: '1.5rem' }}>
                    <CatTagMessage tag={topTag} />
                </div>
            )}

            <CommitChart data={commitData} />
        </div>
    );
}

export default CommitSection;
