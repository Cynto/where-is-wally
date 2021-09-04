import { Link } from 'react-router-dom';
import 'firebase/firestore';
import 'firebase/auth';
import './homepage.css';


function HomePage(props: any) {
  return (
    <div className="homepage">
      <div className="button-container">
        <Link to="/game">
          <button className="css-button-3d--sky">Play Game</button>
        </Link>
        <Link to="/leaderboard">
          <button className="css-button-3d--red">Leaderboard</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
