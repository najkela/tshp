import React from 'react';
import './Home.css';

const Home = () => {
  return (
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


    </div>
  );
};

export default Home;
