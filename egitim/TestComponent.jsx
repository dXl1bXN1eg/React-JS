import React from 'react';

function TestComponent(props) {
    const users = [
        {
            username: "Ali",
            password: "parola"
        },
        {
            username: "Ahmet",
            password: "parola2"
        }
    ];

    return (
        <div className='Header'>
            <div>
                Burası Demo Proje Alanı
            </div>

            <div>
                Kullanıcılar:
                {users.map((user, index) => (
                    <div key={index}>
                        <div>Username: {user.username}</div>
                        <div>Password: {user.password}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestComponent;
