import React from 'react';
import '../css/header.css';

function Headers() {
    return (
        <header className="header">
            <div className="container">
                <h1>Geliştirme ve Arge Sayfam</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/" className="hover:text-blue-200">
                                Ana Sayfa
                            </a>
                        </li>
                        <li>
                            <a href="#courses" className="hover:text-blue-200">
                                Kurslarım
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Headers;
