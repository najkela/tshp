import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../contexts/authContext';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore funkcija
import { db } from '../firebase-config'; // Tvoj Firestore config

const Header = () => {

  const { currentUser, userLoggedIn } = useAuth();
  const [username, setUsername] = useState('');

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