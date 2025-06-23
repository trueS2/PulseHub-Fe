// src/app/components/organisms/Header.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ onLogout }) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const showLogout = pathname !== '/login';

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        onLogout && onLogout();
        navigate('/login');
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img
                    src="/pulsehub-icon.png"
                    alt="PulseHub Logo"
                    className={styles.logoImage}
                />
                <h1 className={styles.logo}>PulseHub</h1>
            </div>

            {showLogout && (
                <button
                    onClick={handleLogout}
                    className={styles.logoutButton}
                >
                    로그아웃
                </button>
            )}
        </header>
    );
}

export default Header;
