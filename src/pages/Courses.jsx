import React from 'react';
import './Courses.css';
import { useNavigate } from 'react-router-dom';
import '../components/Header';
import Header from '../components/Header';

const Courses = () => {

  const navigate = useNavigate();

  const handleButtonClick = (courseName) => {
    navigate(`/courses/${courseName}`);
  };

  return (
    <div className="courses-container">
      <div className='open'>
        <div class="sloj"></div>
        <div class="sloj"></div>
        <div class="sloj"></div>
      </div>
      <h2 className="courses-title">Lessons</h2>
      <div className="courses-grid">
        <div className="course-card">
          <h3>Recursion</h3>
          <p>Recursion in mathematics and computer science means a procedure or function that uses itself in its definition.</p>
          <button onClick={() => handleButtonClick('rekurzija')}>Learn More</button>
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
