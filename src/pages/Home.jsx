import React, { useEffect, useState } from 'react';
import './Home.css';
import AnimatedText from '../components/AnimatedText.jsx';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore funkcija
import { db } from '../firebase-config'; // Tvoj Firestore config
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(`/${path}`);
  };

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
          <h1>
            Welcome to the TSHP;
          </h1>
          <div className='moto'>
            <AnimatedText />
          </div>
          <h1>
            On this site you can learn, practise and much more!
          </h1>
          <p>
            Here will go some description...
          </p>
          <div className='button-grid'>
            <div className="button-card">
              <h3>Enjoy learning</h3>
              <p>Here you can learn new lections.</p>
              <button onClick={() => handleButtonClick('courses')}>View courses!</button>
            </div>
            <div className='button-card'>
              <h3>Enjoy practising</h3>
              <p>Here you can practise new lections.</p>
              <button onClick={() => handleButtonClick('')}>View tasks!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;