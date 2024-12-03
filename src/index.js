import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 ve sonrası için yeni import
import './index.css'; // Varsayılan stil dosyası, isteğe bağlı

function MyForm() {
  return (
    <form>
      <label>
        Enter your name:
        <input type="text" />
      </label>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18'de kullanılan yeni yöntem
root.render(<MyForm />);
