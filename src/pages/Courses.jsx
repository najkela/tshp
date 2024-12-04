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
      <h2 className="courses-title">
        Kursevi
      </h2>
      <div className="courses-grid">
        <div className="course-card">
          <h3>Course 1</h3>
          <p>Details 1</p>
          <button onClick={() => handleButtonClick('course1')}>View Details</button>
        </div>
        <div className="course-card">
        <h3>Course</h3>
          <p>Details</p>
          <button>View Details</button>
        </div>
        <div className="course-card">
        <h3>Course</h3>
          <p>Details</p>
          <button>View Details</button>
        </div>
        <div className="course-card">
        <h3>Course</h3>
          <p>Details</p>
          <button>View Details</button>
        </div>
        <div className="course-card">
        <h3>Course</h3>
          <p>Details</p>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
