import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Samo importuj Routes i Route

import Login from '../pages/Login';
import Courses from '../pages/Courses';
import Home from '../pages/Home';

const Main = () => {
  return (
    <main>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />

      </Routes>
    </main>
  );
};

export default Main;
