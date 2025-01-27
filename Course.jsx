import React from 'react'
import '../css/course.css';

export default function Course({ course }) {
    const { id, title, description, image, price, link } = course;

    return (
        <div id='courses' className="course-container">
            <div><img src={image} alt="Kurs" width="300" height="200" /></div>
            <div><span>Title:</span> {title}</div>
            <div><span>Description:</span> {description}</div>
            <div><span>Price:</span> {price}</div>
            <a target='_blank' href={link}>Dersi Al</a>
        </div>
    )
}
