import React, { useState } from 'react';
import Headers from './Headers';
import './App.css';
import Course from './Course';
import { courses } from './data';

function App() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="app-container">
      <Headers />
      <div className="course-wrapper">
        <button className="pagination-btn left" onClick={handlePrevPage} disabled={currentPage === 1}>
          &#8592;
        </button>
        <div className="course-list">
          {currentCourses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
        <button className="pagination-btn right" onClick={handleNextPage} disabled={currentPage === totalPages}>
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default App;
