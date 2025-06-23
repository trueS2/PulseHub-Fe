// src/app/components/pages/HomePage.js
import React, { useState } from 'react';
import { useGithubUser } from '../../hooks/useGithubUser';
import Header from '../organisms/Header';
import Heading from '../atoms/Heading';
import SearchForm from '../molecules/SearchForm';
import UserProfile from '../organisms/UserProfile';
import CommitSection from '../organisms/CommitSection';

function HomePage() {
    const [username, setUsername] = useState('');
    const [commitDays, setCommitDays] = useState(30);
    const [commitAnalyzeTrigger, setCommitAnalyzeTrigger] = useState(false);
    const { userData, loading, error, getUserData } = useGithubUser();

    const handleSearch = () => {
        if (username.trim()) {
            getUserData(username.trim());
            setCommitAnalyzeTrigger(false);
        }
    };

    const handleCommitAnalyze = () => {
        if (userData) {
            setCommitAnalyzeTrigger(true);
        }
    };

    const handleLogoutCleanup = () => {
    };

    return (
        <div>
            <Header onLogout={handleLogoutCleanup} />

            <Heading level={2}>GitHub 사용자 검색</Heading>
            <SearchForm
                username={username}
                setUsername={setUsername}
                onSearch={handleSearch}
            />

            {loading && <p>로딩 중...</p>}
            {error && <p>에러: {error.message}</p>}

            {userData && (
                <>
                    <Heading level={2}>프로필</Heading>
                    <UserProfile user={userData} />

                    <div style={{ marginTop: '1rem' }}>
                        <label htmlFor="commitDays">
                            <Heading level={2}>커밋 조회</Heading>
                        </label>
                        <select
                            id="commitDays"
                            value={commitDays}
                            onChange={(e) => setCommitDays(Number(e.target.value))}
                        >
                            <option value={15}>15일</option>
                            <option value={30}>1개월</option>
                            <option value={60}>2개월</option>
                            <option value={90}>3개월</option>
                        </select>
                        <button
                            onClick={handleCommitAnalyze}
                            style={{ marginLeft: '0.5rem' }}
                        >
                            커밋 분석
                        </button>
                    </div>

                    {commitAnalyzeTrigger && (
                        <CommitSection username={userData.login} days={commitDays} />
                    )}
                </>
            )}
        </div>
    );
}

export default HomePage;
