import './Home.css';
import AnimatedText from '../components/AnimatedText.jsx';

const Home = () => {

  return (
    <div className="container">
      <div className='content'>
        <AnimatedText />
        <h1>
          Welcome to the site for practising programming;
        </h1>
      </div>
    </div>
  );
};

export default Home;