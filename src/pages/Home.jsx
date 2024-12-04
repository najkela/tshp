import React, { useEffect, useState } from 'react';
import './Home.css';
import AnimatedText from '../components/AnimatedText.jsx';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore funkcija
import { db } from '../firebase-config'; // Tvoj Firestore config

const Home = () => {
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
    <div className="container">
      <div className='row'>
        <nav className='navbar'>
          <Link to="/" className="logo"><h1>TSHP</h1></Link>
          <ul>
            <li><Link to="/courses" className="nav-link">Lekcije</Link></li>
            {!userLoggedIn ? (
              <li><Link to="/login" className="nav-link">Prijavite se</Link></li>
            ) : (
              <li><span>{username}</span></li>
            )}

          </ul>
        </nav>
        <div className='content'>
          <div className='moto'>
            <AnimatedText />
          </div>
          <h1>
            Welcome to the site for practising programming;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;