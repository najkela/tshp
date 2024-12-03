import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">TSHP</Link>
      <nav>
        <Link to="/courses" className="nav-link">Courses</Link>
        <Link to="/login" className="nav-link">Sign-in</Link>
      </nav>
    </header>
  );
};

export default Header;
