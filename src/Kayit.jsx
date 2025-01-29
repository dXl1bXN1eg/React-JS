import React, { useState } from 'react';
import Headers from './Headers';
import '../css/register.css';
import Anasayfa from './Anasayfa';
import axios from 'axios';

export default function Kayit() {
    const [formData, setFormData] = useState({ name: '', username: '', email: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.name && formData.username && formData.email && formData.password) {
            try {
                const response = await axios.post('http://localhost:5000/api/register', formData);
                alert('Registration successful! Message: ' + response.data.message);
            } catch (error) {
                alert('Registration failed: ' + (error.response ? error.response.data.error : error.message));
            }
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div>
            <Headers />
            <Anasayfa />
            <div className='container_register'>
                <center>
                    <h1 id='register'>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
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

                        <input type="submit" value="Register" />
                    </form>
                </center>
            </div>
        </div>
    );
}
