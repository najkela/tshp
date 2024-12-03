import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">
        Kursevi
      </h2>
      <div className="courses-grid">
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
