import { useState } from 'react'
import './App.css'
import TestComponent from './TestComponent';
import { users } from './TestComponent';

function App() {
  let a = 10;
  let b = 4;

  let sonuc = true;

  let isimler = [
    "Hacker",
    "Siyah Şapka",
    "Beyaz Şapka",
    "Gri Şapka"
  ]

  console.log(users)

  return (
    <div className='Container'>
      {/* sonuc ? <p>Ehliyeti Alabilirsiniz ..</p> : <p>Ehliyeti Alamassın ..</p> */}

      {/* (a + b) / 2 >= 50 ? <p>Dersten Geçtin</p> : <p>Dersten Kaldın</p> */}

      {/* isimler.map((isim, index) => (
        <div style={{ color: 'black' }} key={index}>
          <a style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }} href='#'>{index}. {isim}</a>
        </div>
      )) */}

      <TestComponent />
    </div>
  )
}


export default App
