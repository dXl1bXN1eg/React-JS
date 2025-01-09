import React from 'react'


export const users = [
    {
        username: "Ali",
        password: "parola"
    },
    {
        username: "Ahmet",
        password: "parola2"
    }
]


function TestComponent() {
    return (
        <div className='Header'>
            <div>
                Burası Header Alanı
            </div>
        </div>
    )
}

export default TestComponent
