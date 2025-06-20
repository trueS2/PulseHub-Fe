import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OAuthRedirectHandler() {
    const navigate = useNavigate();

    useEffect(() => {
        const url = new URL(window.location.href);
        const jwt = url.searchParams.get('jwt');

        if (jwt) {
            localStorage.setItem('jwt', jwt);
            navigate('/');
        } else {
            alert('로그인 실패');
            navigate('/login');
        }
    }, [navigate]);

    return <div>로그인 처리 중입니다...</div>;
}

export default OAuthRedirectHandler;
