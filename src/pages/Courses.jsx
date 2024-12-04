import React from 'react';
import './Courses.css';
import { useNavigate } from 'react-router-dom';

const Courses = () => {

  const navigate = useNavigate();

  const handleButtonClick = (courseName) => {
    navigate(`/courses/${courseName}`);
  };

  return (
    <div className="courses-container">
      <h2 className="courses-title">Kursevi</h2>
      <div className="courses-grid">
        <div className="course-card">
          <h3>Linked list</h3>
          <p>In this course you will learn how to make, use and edit linked lists.</p>
          <button onClick={() => handleButtonClick('course1')}>Start course!</button>
        </div>
        <div className="course-card">
          <h3>Course 2</h3>
          <p>Details about course 2</p>
          <button onClick={() => handleButtonClick('course2')}>View Details</button>
        </div>
        <div className="course-card">
          <h3>Course 3</h3>
          <p>Details about course 3</p>
          <button onClick={() => handleButtonClick('course3')}>View Details</button>
        </div>
        <div className="course-card">
          <h3>Course 4</h3>
          <p>Details about course 4</p>
          <button onClick={() => handleButtonClick('course4')}>View Details</button>
        </div>
        <div className="course-card">
          <h3>Course 5</h3>
          <p>Details about course 5</p>
          <button onClick={() => handleButtonClick('course5')}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
