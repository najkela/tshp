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
        setError('Passwords do not match!');
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
        setError("The account probably already exists, please try again");
      }
    } else {
      try {
        await doSignInUserWithEmailAndPassword(email, password);
        navigate('/');
      } catch (err) {
        console.error('Greška pri prijavi:', err);
        setError("These credentials do not match, please try again");
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
    <div className="login-container">
      <h2>{isRegistering ? 'Register' : 'Sign-in'}</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
          />
        </div>
        {isRegistering && (
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        {isRegistering && (
          <div className="form-group">
            <label htmlFor="repeat-password">Type password again:</label>
            <input
              type="password"
              id="repeat-password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat password"
              required
            />
          </div>
        )}
        <button type="submit">{isRegistering ? 'Register' : 'Signin'}</button>

      </form>

      <p>
        {isRegistering ? "Already have an account? " : "Didn't register yet?"}
        <span onClick={handleSwitch} className="switch-link">
          {isRegistering ? ' Sign-in' : ' Register'}
        </span>
      </p>
    </div>
  </>
  );
};

export default Login;