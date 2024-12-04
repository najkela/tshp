import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../contexts/authContext';

const Header = () => {

  const { currentUser, userLoggedIn } = useAuth();

  return (
    <header className="header">
      <nav className='navbar'>
          <Link to="/" className="logo"><h1>TSHP</h1></Link>
          <ul>
            <li><Link to="/courses" className="nav-link">Lekcije</Link></li>
            <li>
              {!userLoggedIn ? (
              <Link to="/login" className="nav-link">Prijavite se</Link>
            ) : (
              <span className="nav-link">{currentUser.displayName}</span>
            )}
            </li>
          </ul>
      </nav>
    </header>
  );
};

export default Header;