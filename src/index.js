import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './assets/GlobalStyle';
import { AuthProvider } from './contexts/AuthContext';
import { UserInfoProvider } from './contexts/UserContext';
import "./assets/css/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserInfoProvider>
        <GlobalStyle />
        <App />
      </UserInfoProvider>
    </AuthProvider>
  </React.StrictMode>
);
