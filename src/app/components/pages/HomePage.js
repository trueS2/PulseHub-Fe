// src/app/components/pages/HomePage.js
import React, { useState } from 'react';
import { useGithubUser } from '../../hooks/useGithubUser';
import Header from '../organisms/Header';
import Heading from '../atoms/Heading';
import SearchForm from '../molecules/SearchForm';
import UserProfile from '../organisms/UserProfile';
import CommitSection from '../organisms/CommitSection';
import Text from '../atoms/Text';
import styles from './HomePage.module.css';

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
        <>
            <Header onLogout={handleLogoutCleanup} />

            <div className={styles.content}>
                <Heading level={2}>GitHub 사용자 검색</Heading>

                <SearchForm
                    username={username}
                    setUsername={setUsername}
                    onSearch={handleSearch}
                />
                <Text>🔒 다른 계정 조회 시 공개 저장소만 분석됩니다.</Text>

                {loading && <p>로딩 중...</p>}
                {error && <p>에러: {error.message}</p>}

                {userData && (
                    <>
                        <Heading level={2}>프로필</Heading>
                        <UserProfile user={userData} />

                        <div>
                            <Heading level={2}>커밋 조회</Heading>
                            <div className={styles.commitControls}>
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
                                <button onClick={handleCommitAnalyze}>
                                    커밋 분석
                                </button>
                            </div>
                        </div>

                        {commitAnalyzeTrigger && (
                            <CommitSection username={userData.login} days={commitDays} />
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default HomePage;
