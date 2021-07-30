import './App.css';
import Gifs from './components/giphyGifs/Gifs';
import NavBar from './components/layout/NavBar';
import RecentSearchs from './components/layout/RecentSearchs';
import Search from './components/layout/Search';
import GifState from './context/giphy/GifState';

function App() {
  return (
    <GifState>
      <NavBar />
      <Search className="container"/>
      <div className="flex container">
        <div className="recents">
           <RecentSearchs />
        </div>
        <Gifs className="table"/>
      </div>
    </GifState>
  );
}

export default App;
