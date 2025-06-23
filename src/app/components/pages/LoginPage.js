// src/app/components/pages/LoginPage.js
import React from 'react';
import Header from '../organisms/Header';
import LoginSection from '../organisms/LoginSection';

function LoginPage() {
    return (
        <div>
            <Header />

            <div className="flex-1">
                <LoginSection />
            </div>
        </div>
    );
}

export default LoginPage;
