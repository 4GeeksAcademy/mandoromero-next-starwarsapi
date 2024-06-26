import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './hooks/useGlobalReducer';
import Layout from './pages/Layout'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StoreProvider>
        <Router>
            <Layout />
        </Router>
    </StoreProvider>
);