import React, { useEffect, useState } from 'react';
import './Home.css';
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
<<<<<<< HEAD
    <div className="home">
      <header className="home-header">
        <h1>Dobrodošli na sajt za ...</h1>
        <h2>Na ovom sajtu možete se upoznati sa...</h2>
      </header>

      <section className="home-content">
        <p className="description">
          Deskripcija... Na ovom sajtu ćete naći resurse koji vam pomažu da naučite nove veštine i vežbate kodiranje.
        </p>
        <div className="grid-container">
          <div className="grid-item">
            <h3>Funkcija 1</h3>
            <p>Opis funkcije 1</p>
          </div>
          <div className="grid-item">
            <h3>Funkcija 2</h3>
            <p>Opis funkcije 2</p>
          </div>
          <div className="grid-item">
            <h3>Funkcija 3</h3>
            <p>Opis funkcije 3</p>
          </div>
        </div>
      </section>


=======
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
          <h1>Trica Stikla Penzija</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
>>>>>>> 973b85b29c987a6d7f1f73c8be50120f175f4ff1
    </div>
  );
};

export default Home;
