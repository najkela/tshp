import React, { useState } from 'react';
import './Login.css'; // Import CSS fajla za login stranicu

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovdje možeš dodati logiku za autentifikaciju korisnika
    console.log('Prijava:', username, password);
  };

  return (
    <div className="login-container">
      <h2>Prijavite se</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Prijavi se</button>
      </form>
    </div>
  );
};

export default Login;