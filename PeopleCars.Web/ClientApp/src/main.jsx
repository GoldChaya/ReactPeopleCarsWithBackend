import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import App from './App'
import Layout from './Layout'
import SearchBar from './Components/SearchBar';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
