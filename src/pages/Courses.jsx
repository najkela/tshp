import React, { useEffect, useState, useRef } from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const Courses = () => {

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
    navigate(`/courses/${path}`);
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
    <>
      <div className="courses-container">
        <nav className='navbar'>
          <Link to="/" className="logo"><h1>TSHP</h1></Link>
          <ul>
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
            <button onClick={() => handleButtonClick('rekurzija')}>Start lesson</button>
          </div>
          <div className="course-card">
            <h3>Graph teory</h3>
            <p>This and the following lessons will teach the reader about graph theory, one of the key areas in competitive programming.</p>
            <button onClick={() => handleButtonClick('graph-teory')}>Start lesson</button>
          </div>
          <div className="course-card">
            <h3>DFS Graph Traversal</h3>
            <p>Depth-First Search (DFS) is a graph traversal algorithm that explores as deeply as possible along each branch before backtracking.</p>
            <button onClick={() => handleButtonClick('dfs')}>Start lesson</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
