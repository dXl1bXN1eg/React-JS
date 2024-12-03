import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // App bileşenini import et

// React uygulamasını 'root' div'ine render et
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* App bileşenini burada render ediyoruz */}
  </React.StrictMode>
);
