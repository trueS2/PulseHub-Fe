import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <img src="/pulsehub-icon.png" alt="PulseHub Logo" className={styles.logoImage} />
            <h1 className={styles.logo}>PulseHub</h1>
        </header>
    );
}

export default Header;