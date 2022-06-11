import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'


document.querySelector('body').style.height = window.innerHeight;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter >
        <App />
    </HashRouter >
);

