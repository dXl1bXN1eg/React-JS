import { courses } from './data';
import React from 'react';
import Headers from './Headers';
import '../css/course.css';
import Anasayfa from './Anasayfa';

export default function Courses() {
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = React.useState(1);

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
        <div>
            <Headers />
            <Anasayfa />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="course-wrapper">
                <button className="pagination-btn left" onClick={handlePrevPage} disabled={currentPage === 1}>
                    &#8592;
                </button>
                <div className="course-list">
                    {currentCourses.map((course) => {
                        const { id, title, description, image, price, link } = course;

                        return (
                            <div key={id} id='courses' className="course-container">
                                <div><img src={image} alt="Kurs" width="300" height="200" /></div>
                                <div><span>Title:</span> {title}</div>
                                <div><span>Description:</span> {description}</div>
                                <div><span>Price:</span> {price}</div>
                                <a target='_blank' href={link} rel="noopener noreferrer">Dersi Al</a>
                            </div>
                        );
                    })}
                </div>
                <button className="pagination-btn right" onClick={handleNextPage} disabled={currentPage === totalPages}>
                    &#8594;
                </button>
            </div>
        </div>
    );
}
