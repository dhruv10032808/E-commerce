import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import { AuthContextProvider } from './Store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContextProvider><BrowserRouter>
<App /></BrowserRouter>
</AuthContextProvider>);
