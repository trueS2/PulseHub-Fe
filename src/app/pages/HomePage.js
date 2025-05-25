import React, { useState } from 'react';
import { useGithubUser } from '../hooks/useGithubUser';
import UserProfile from '../components/UserProfile';

function HomePage() {
    const [username, setUsername] = useState('');
    const { userData, loading, error, getUserData } = useGithubUser();

    const handleSearch = () => {
        if (username.trim() !== '') {
            getUserData(username.trim());
        }
    };

    return (
        <div>
            <h1>GitHub 사용자 검색</h1>
            <input
                type="text"
                placeholder="GitHub 아이디 입력"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>검색</button>

            {loading && <p>로딩 중...</p>}
            {error && <p>에러: {error.message}</p>}
            {userData && <UserProfile user={userData} />}
        </div>
    );
}

export default HomePage;
