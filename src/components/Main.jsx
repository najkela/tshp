import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Samo importuj Routes i Route

import Login from '../pages/Login';
import Courses from '../pages/Courses';
import Home from '../pages/Home';
import RekurzijaKurs from '../pages/Courses/RekurzijaKurs';
import GraphTeory from '../pages/Courses/GraphTeory';
import DFS from '../pages/Courses/DFS';
import BFS from '../page/Courses/BFS';


const Main = () => {
  return (
    <main>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<Home />} />

        <Route path="/courses/rekurzija" element={<RekurzijaKurs />} />
        <Route path="/courses/graph-teory" element={<GraphTeory />} />
        <Route path="/courses/dfs" element={<DFS />} />
        <Route path="/courses/bfs" element={<BFS />} />
        
      </Routes>
    </main>
  );
};

export default Main;
