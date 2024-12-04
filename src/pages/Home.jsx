import React from 'react';
import './Home.css';
import AnimatedText from '../components/AnimatedText.jsx';

const Home = () => {

  return (
    <div className="container">
      <div className='row'>
        <div className='content'>
          <AnimatedText />
        </div>
      </div>
    </div>
  );
};

export default Home;