import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './app/components/pages/HomePage';
import LoginPage from './app/components/pages/LoginPage';
import OAuthRedirectHandler from './app/components/pages/OAuthRedirectHandler';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn === null) {
    return <div>로딩 중...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth/redirect" element={<OAuthRedirectHandler setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
