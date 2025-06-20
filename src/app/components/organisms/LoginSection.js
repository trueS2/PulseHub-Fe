// src/app/components/organisms/LoginSection.js
import React from 'react';
import LoginBox from '../molecules/LoginBox';

function LoginSection() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
            <LoginBox />
        </section>
    );
}

export default LoginSection;
