import React, { useState } from 'react';
import Headers from './Headers';
import '../css/login.css';
import Anasayfa from './Anasayfa';

export default function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });

    // Değişiklikleri yakalamak için bir handler fonksiyonu
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.username === 'admin' && formData.password === '12345') {
            alert('Login successful!');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            <Headers />
            <Anasayfa />
            <div className='container_login'>
                <center>
                    <h1 id='loginname'>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />

                        <input type="submit" value="Login" />
                    </form>
                </center>
            </div>
        </div>
    );
}
