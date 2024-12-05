import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { currentUser, userLoggedIn } = useAuth();
  const [username, setUsername] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState('');
  const dropdownRef = useRef(null); // Referenca za dropdown

  useEffect(() => {
    const fetchUsername = async () => {
      if (currentUser) {
        try {
          const userDoc = doc(db, 'users', currentUser.uid); // Referenca na dokument
          const userSnap = await getDoc(userDoc); // Dohvati podatke dokumenta
          if (userSnap.exists()) {
            setUsername(userSnap.data().username || 'Anonimni kul korisnik'); // Postavi username
          } else {
            console.error('Dokument ne postoji!');
          }
        } catch (error) {
          console.error('Greška pri dohvatanju podataka:', error);
        }
      }
    };

    fetchUsername();
  }, [currentUser]);

  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(`/${path}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Togluje dropdown
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setError('');
    } catch (error) {
      setError('Greška pri izlogovanju!');
    }
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false); // Zatvori dropdown
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick); // Čišćenje eventa
    };
  }, [isDropdownOpen]);

  return (

    <div className="container">
      <div className='open'>
        <div className="sloj"></div>
        <div className="sloj"></div>
        <div className="sloj"></div>
      </div>
      <div className='row'>
        <nav className='navbar'>
          <Link to="/" className="logo"><h1>TSHP</h1></Link>
          <ul>
            <li><Link to="/courses" className="nav-link username">Lessons</Link></li>
            {!userLoggedIn ? (
              <li><Link to="/login" className="nav-link username">Sign-in</Link></li>
            ) : (
              <li className="dropdown" ref={dropdownRef}>
                <span onClick={toggleDropdown} className="username">{username}</span>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <p>Score: {currentUser?.score}</p>
                    <button onClick={handleSignOut} className="dropdown-item">Sign Out</button>
                  </div>
                )}
              </li>
            )}
          </ul>
        </nav>
        <div className='content'>
          <h1>
            <span >T</span>hinking, <span>S</span>haring, <span>H</span>elping, <span>P</span>rogramming; <div className="blinking-cursor">|</div>
          </h1>
          <p>Perfect community for learning.</p>

        </div>
      </div>
    </div>
  );
};

export default Home;