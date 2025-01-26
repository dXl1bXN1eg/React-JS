import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const Toplam = () => {
    const tpl = Deger();
    Ekrandagöster(tpl);
  }

  const Deger = () => {
    const toplam = (vize1 + vize2) / 2;
    return toplam;
  }

  const Ekrandagöster = (tpl) => {
    console.log(tpl);
  }

  return (
    <div>
      <div>
        <input type="number" value={vize1} onChange={(e) => {
          setVize1(Number(e.target.value));
        }} />
        <br />
        <input type="number" value={vize2} onChange={(e) => {
          setVize2(Number(e.target.value));
        }} />
      </div>
      <div>
        <button onClick={Toplam}>Sonuc</button>
      </div>
    </div>
  )
}


export default App
