import './App.scss';
import ListMovies from './pages/listMovies';

import Categories from './pages/categories';
import AboutMovie from './pages/aboutMovie';
import { Route, Routes } from 'react-router-dom';
import Search from './component/search';
import ListMoviesGenres from './pages/listMoviesGenres';


function App() {
  return (
    <div className="App">
      <Categories />

      <div className='block-page'>
        <Search />
        <Routes>
          <Route path='/' element={<ListMovies />} />
          <Route path='/movie/:id' element={<AboutMovie />} />
          <Route path='/genres/:action' element={<ListMoviesGenres />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
