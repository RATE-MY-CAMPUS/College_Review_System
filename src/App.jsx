import React, { useState } from 'react';
import Navigation from './components/Navigation';
import StartPage from './components/StartPage';
import LoginPage from './components/LoginPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
  <>
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID_HERE">
    <div className="min-h-screen bg-gray-50">
      {currentPage !== 'start' && (
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      )}

      {currentPage === 'home' && (
        <StartPage onPageChange={setCurrentPage} /> 
      )}
      {currentPage === 'login' && <LoginPage onBack={() => setCurrentPage('home')} />}
    </div>
    </GoogleOAuthProvider>
    </>
  );
}

export default App;
