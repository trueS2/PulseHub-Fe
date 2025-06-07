// src/app/components/pages/HomePage.js
import React, { useState } from 'react';
import { useGithubUser } from '../../hooks/useGithubUser';
import UserProfile from '../organisms/UserProfile';
import SearchForm from '../molecules/SearchForm';
import Header from '../organisms/Header';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';


function HomePage() {
    const [username, setUsername] = useState('');
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

            {loading && <p>로딩 중...</p>}
            {error && <p>에러: {error.message}</p>}
            {userData && <UserProfile user={userData} />}
        </div>
    );
}

export default HomePage;
