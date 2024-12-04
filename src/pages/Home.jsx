import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {


  return (
    <div className="container">
      <div className='row'>
        <nav className='navbar'>
          <Link to="/" className="logo"><h1>LOGO</h1></Link>
          <ul>
            <li><Link to="/courses" className="nav-link">Lekcije</Link></li>
            <li><Link to="/login" className="nav-link">Prijavite se</Link></li>
          </ul>
        </nav>
        <div className='content'>
          <h1>Trica Stikla Penzija</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
