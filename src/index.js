import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index';
import GlobalStyle from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Home />  
        <GlobalStyle />
    </>
);
