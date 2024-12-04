import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../contexts/authContext';

const Header = () => {
  const { currentUser, userLoggedIn } = useAuth();


  return (
    <header className="header">
      <Link to="/" className="logo">TSHP</Link>
      <nav>
        <Link to="/courses" className="nav-link">Lekcije</Link>
        {!userLoggedIn ? (
          <Link to="/login" className="nav-link">Prijavite se</Link>
        ) : (
          <span className="nav-link">{currentUser.displayName}</span>
        )}
      </nav>
    </header>
  );
};

export default Header;