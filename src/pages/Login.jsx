import React, { useState } from 'react';
import './Login.css';
import {
  doCreateUserWithEmailAndPass,
  doSignInUserWithEmailAndPassword,
  doSignInWithGoogle,
} from '../auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isRegistering) {
      if (password !== repeatPassword) {
        setError('Lozinke se ne podudaraju!');
        return;
      }
      try {
        await doCreateUserWithEmailAndPass(email, password);
        alert('Uspešno ste se registrovali!');
      } catch (err) {
        console.error('Greška pri registraciji:', err);
        setError(err.message);
      }
    } else {
      try {
        await doSignInUserWithEmailAndPassword(email, password);
        alert('Uspešno ste se prijavili!');
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
      alert('Uspešno ste se prijavili putem Google-a!');
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
        {isRegistering && (
          <div className="form-group">
            <label htmlFor="repeat-password">Ponovno unesite lozinku:</label>
            <input
              type="password"
              id="repeat-password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Ponovno unesite lozinku"
              required
            />
          </div>
        )}
        <button type="submit">{isRegistering ? 'Registrujte se' : 'Prijavi se'}</button>
        {!isRegistering && (
          <button type="button" onClick={handleGoogleSignIn} className="google-sign-in">
            Prijavite se putem Google-a
          </button>
        )}
      </form>

      <p>
        {isRegistering ? 'Već imate nalog? ' : 'Nemate nalog? '}
        <span onClick={handleSwitch} className="switch-link">
          {isRegistering ? 'Prijavite se' : 'Registrujte se'}
        </span>
      </p>
    </div>
  );
};

export default Login;
