import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OAuthRedirectHandler({ setIsLoggedIn }) {
    const navigate = useNavigate();

    useEffect(() => {
        const url = new URL(window.location.href);
        const jwt = url.searchParams.get('jwt');

        if (jwt) {
            localStorage.setItem('jwt', jwt);
            setIsLoggedIn(true);
            navigate('/', { replace: true });
        } else {
            alert('로그인 실패');
            navigate('/login', { replace: true });
        }
    }, [navigate, setIsLoggedIn]);

    return <div>로그인 처리 중입니다...</div>;
}

export default OAuthRedirectHandler;
