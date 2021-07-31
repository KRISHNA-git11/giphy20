import './App.css';
// import NavBar from './components/layout/NavBar';
import Search from './components/layout/Search';
import GifState from './context/giphy/GifState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reddit from './components/pages/Reddit';
import Home from './components/pages/Home';

function App() {
  return (
    <GifState>
      <Router>
        {/* <NavBar /> */}
        {/* <Search className="container" /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reddit" component={Reddit} />
        </Switch>
      </Router>
    </GifState>
  );
}

export default App;
