import React from 'react'
import styles from './LoginSection.module.css'
import Button from '../atoms/LoginBtn'

function LoginSection() {
    const handleLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/github'
    }

    return (
        <section className={styles.section}>
            <div className={styles.box}>
                <h2 className="text-2xl font-bold">로그인</h2>
                <p className="text-sm text-gray-500">GitHub 계정으로 로그인하세요.</p>
                <Button onClick={handleLogin}>GitHub 로그인</Button>
            </div>
        </section>
    )
}

export default LoginSection
