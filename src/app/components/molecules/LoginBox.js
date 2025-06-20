// src/app/components/molecules/LoginBox.js
import React from 'react';
import Button from '../atoms/LoginBtn';

function LoginBox() {
    const handleLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/github'; // 백엔드 OAuth2 로그인 주소
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold">PulseHub에 로그인</h2>
            <p className="text-sm text-gray-500">GitHub 계정으로 로그인하세요.</p>
            <Button onClick={handleLogin}>GitHub 로그인</Button>
        </div>
    );
}

export default LoginBox;
