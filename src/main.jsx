import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './hooks/useGlobalReducer';
import Layout from './pages/Layout'; 

ReactDOM.render(
    <StoreProvider>
        <Router>
            <Layout />
        </Router>
    </StoreProvider>,
    document.getElementById('root')
);
