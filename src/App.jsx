import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Headers from './Headers';
import Courses from './Courses';
import './App.css';
import Kayit from './Kayit';
import Anasayfa from './Anasayfa';
import SystemInfo from './SystemInfo';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Kayit />} />
        <Route path="/courses" element={<Courses />} />

        <Route
          path="/"
          element={
            <div>
              <Headers />
              <Anasayfa />
              <SystemInfo />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
