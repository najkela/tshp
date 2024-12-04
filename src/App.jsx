import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Main />
      </div>
    </Router>
  );
};

export default App;