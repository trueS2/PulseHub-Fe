// src/app/components/organisms/GithubUserSection.js
import React from 'react';
import UserProfile from '../UserProfile';

function GithubUserSection({ loading, error, userData }) {
    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러: {error.message}</p>;
    if (!userData) return null;

    return <UserProfile user={userData} />;
}

export default GithubUserSection;
