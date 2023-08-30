﻿import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <a className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">React People Cars</a>
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to='/' className='nav-link text-light'>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/addperson' className='nav-link text-light'>
                                        Add Person
                                    </Link>
                                    <h1>hello world</h1>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container" style={{ marginTop: 60 }}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;