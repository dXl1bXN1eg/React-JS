import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('Cemal');
  const [lastName, setLastName] = useState('Yılmaz');

  // Callbacks Functions
  // Component ilk render edildiğinde bir kez çalışır ve firstname değer alırsa çalışır.
  useEffect(() => {
    console.log(firstName)
  }, [firstName])

  // Component tüm aksiyonlarda çalışır sistemi çok yorar.
  useEffect(() => {
    console.log("Her zaman Tüm Aksiyonlarda çalışır")
  })

  return (
    <div>
     
    </div>
  )
}


export default App
