import HomePage from './components/homepage/HomePage';
import Header from './components/header/Header';
import Game from './components/game/Game';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Leaderboard from './components/leaderboard/Leaderboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
