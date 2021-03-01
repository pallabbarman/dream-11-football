import React from 'react';
import './Header.css';

const Header = () => (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/index.html">
                    Dream 11
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/index.html">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/index.html">
                                Favorite
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Header;
