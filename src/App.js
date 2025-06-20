import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './app/components/pages/HomePage';
import LoginPage from './app/components/pages/LoginPage';
import OAuthRedirectHandler from './app/components/pages/OAuthRedirectHandler';

function App() {
  const isLoggedIn = !!localStorage.getItem('jwt');

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth/redirect" element={<OAuthRedirectHandler />} />
      </Routes>
    </Router>
  );
}

export default App;
