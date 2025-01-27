import React from 'react';
import Headers from './Headers';
import '../css/login.css';

export default function Login() {
    return (
        <div>
            <Headers />
            <div className='container_login'>
                <center>
                    <h1>Login</h1>
                    <form>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />

                        <input type="submit" value="Login" />
                    </form>
                </center>
            </div>
        </div>
    );
}
