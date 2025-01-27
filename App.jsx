import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Headers from './Headers';
import AppCourses from './AppCourses';
import './App.css';

function App() {

  return (
    <div className="app-container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<AppCourses />} />

        <Route
          path="/"
          element={
            <div>
              <Headers />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
