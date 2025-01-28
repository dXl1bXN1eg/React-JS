import React from 'react';
import '../css/headers.css';
import { Link } from 'react-router-dom';

function Headers() {
    return (
        <header className="header">
            <div className="container">
                <h1>Geliştirme ve Arge Sayfam</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="hover:text-blue-200">Ana Sayfa</Link>
                        </li>
                        <li>
                            <Link to="/courses" className="hover:text-blue-200">Kurslarım</Link>
                        </li>
                        <li>
                            <Link to="/login" className="hover:text-blue-200">Giriş Yap</Link>
                        </li>
                        <li>
                            <Link to="/register" className="hover:text-blue-200">Kayıt Ol</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Headers;
