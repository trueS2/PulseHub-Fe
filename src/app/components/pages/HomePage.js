// src/app/components/pages/HomePage.js
import React, { useState } from 'react';
import { useGithubUser } from '../../hooks/useGithubUser';
import UserProfile from '../organisms/UserProfile';
import SearchForm from '../molecules/SearchForm';
import Header from '../organisms/Header';
import Heading from '../atoms/Heading';
import CommitSection from '../organisms/CommitSection';

function HomePage() {
    const [username, setUsername] = useState('');
    const days = 30;
    const { userData, loading, error, getUserData } = useGithubUser();

    const handleSearch = () => {
        if (username.trim()) {
            getUserData(username.trim());
        }
    };

    return (
        <div>
            <Header />
            <Heading level={2}>GitHub 사용자 검색</Heading>

            <SearchForm
                username={username}
                setUsername={setUsername}
                onSearch={handleSearch}
            />

            <Heading level={2}>프로필</Heading>
            {loading && <p>로딩 중...</p>}
            {error && <p>에러: {error.message}</p>}

            {userData && (
                <>
                    <UserProfile user={userData} />
                    <CommitSection username={userData.login} days={days} />
                </>
            )}
        </div>
    );
}

export default HomePage;
