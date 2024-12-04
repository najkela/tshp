import React, { useState } from 'react';
import './Login.css';
import {
  doCreateUserWithEmailAndPass,
  doSignInUserWithEmailAndPassword,
  doSignInWithGoogle,
} from '../auth';
import { auth } from '../firebase-config';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from "react-router";
import { doc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import '../components/Header';
import Header from '../components/Header';


const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const saveUserToFirestore = async (user) => {
    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        email: user.email,
        username: user.displayName || "Anonimni kul korisnik",
        score: 0,
      });
      console.log("Korisnik je sačuvan u Firestore!");
    } catch (error) {
      console.error("Greška pri čuvanju korisnika u Firestore:", error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isRegistering) {
      if (password !== repeatPassword) {
        setError('Lozinke se ne podudaraju!');
        return;
      }
      try {

        const userCredential = await doCreateUserWithEmailAndPass(email, password);
        const user = userCredential.user;


        await updateProfile(auth.currentUser, {
          displayName: username, // Postavljanje displayName na korisničko ime
        });

        await saveUserToFirestore(user);

        navigate('/');
      } catch (err) {
        console.error('Greška pri registraciji:', err);
        setError(err.message);
      }
    } else {
      try {
        await doSignInUserWithEmailAndPassword(email, password);
        navigate('/');
      } catch (err) {
        console.error('Greška pri prijavi:', err);
        setError(err.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    try {
      await doSignInWithGoogle();
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSwitch = () => {
    setIsRegistering(!isRegistering);
    setError('');
    setEmail('');
    setUsername('');
    setPassword('');
    setRepeatPassword('');
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <h2>{isRegistering ? 'Registrujte se' : 'Prijavite se'}</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Unesite email"
              required
            />
          </div>
          {isRegistering && (
            <div className="form-group">
              <label htmlFor="username">Korisničko ime:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Unesite korisničko ime"
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="password">Lozinka:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Unesite lozinku"
              required
            />
          </div>
        <button type="submit">{isRegistering ? 'Registrujte se' : 'Prijavi se'}</button>

      </form>

        <p>
          {isRegistering ? 'Već imate nalog? ' : 'Nemate nalog? '}
          <span onClick={handleSwitch} className="switch-link">
            {isRegistering ? 'Prijavite se' : 'Registrujte se'}
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;