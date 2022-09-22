import CharacterPage from './containers/CharacterPage'
import HomePage from './containers/HomePage';
import Header from './components/Header/Header';
import PersonPage from './containers/PersonPage/PersonPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import FavoritesPage from './containers/FavoritesPage/FavoritesPage';
import SearchPage from './containers/SearchPage/SearchPage';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className='wrapper'>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="character" element={<CharacterPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="character/:id" element={<PersonPage />} />
            <Route path="search" element={<SearchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
