import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Main.css';

import Login from '../pages/Login';
import Courses from '../pages/Courses';
import Home from '../pages/Home';

import Course1 from '../pages/Courses/Course1';

const Main = () => {
  return (
    <main>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<Home />} />

        <Route path='/courses/course1' element={<Course1 courseFile='../markdowns/course1.md' />} />

      </Routes>
    </main>
  );
};

export default Main;
