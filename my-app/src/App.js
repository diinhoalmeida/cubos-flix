import { useState } from 'react';
import './App.css';

import Movies from './data.js';

import Header from './componentes/Header/index.js';
import MovieCard from './componentes/MovieCards/index.js';
import PromotionBanner from './componentes/promotion/index.js';
import TheBag from './componentes/bag/index.js';
import Filters from './componentes/filters/index.js';


function App() {
  const [ movies, setMovies ] = useState(Movies);
  const [ movieTitleFilter, setMovieTitleFilter ] = useState('');
  const [ movieCategory, setMovieCategory ] = useState([]);
  const [ moviesBag, setMoviesBag ] = useState([]);

  function handleStarredStar(movieTitle) {
    const newMovie = [...movies];

    const  theMovie = newMovie.find(name => name.title === movieTitle);
    theMovie.isStarted = !theMovie.isStarted;

    setMovies(newMovie);
  }

  function returnMovie(movie) {
    if (!movieTitleFilter && movieCategory.length === 0) return movie;

    if (movieTitleFilter && movieCategory.length > 0) {
      if (movieCategory.some(c => movie.categories.includes(c)) && movie.title.includes(movieTitleFilter)) {
        return movie;
      } else {
        return;
      }
    }

    if (movieCategory && movieCategory.some(c => movie.categories.includes(c))) {
      return movie;
    }

    if (movieTitleFilter && movie.title.includes(movieTitleFilter)) return movie;
  }

  function handleMovieBuy(movie) {
    const newMovieBag = [...moviesBag];
    const alreadyInBag = newMovieBag.find(theMovie => theMovie.title === movie.title);

    if (alreadyInBag) {
      alreadyInBag.quantity ++;
      setMoviesBag(newMovieBag);
      return;
    }

    const ifANewMovie = {
      title: movie.title,
      price: movie.price,
      img: movie.backgroundImg,
      quantity: 1
    }
    setMoviesBag([...newMovieBag, ifANewMovie]);
    console.log(newMovieBag);
  }

  function addANewMovie(movieTitle) {
    const newMovieBag = [...moviesBag];
    const findTheMovie = newMovieBag.find(theMovie => theMovie.title === movieTitle);

    findTheMovie.quantity ++;
    setMoviesBag(newMovieBag);
  }

  function removeTheMovie(movieTitle) {
    const newMovieBag = [...moviesBag];
    const findTheMovie = newMovieBag.find(theMovie => theMovie.title === movieTitle);
    const theIndex = newMovieBag.indexOf(findTheMovie);

    newMovieBag.splice(theIndex, 1);
    setMoviesBag(newMovieBag);
  }

  function removeQuantityMovie(movieTitle) {
    const newMovieBag = [...moviesBag];
    const findTheMovie = newMovieBag.find(theMovie => theMovie.title === movieTitle);

    if (findTheMovie.quantity === 1) {
      const theIndex = newMovieBag.indexOf(findTheMovie);
      newMovieBag.splice(theIndex, 1);
      setMoviesBag(newMovieBag);
      return;  
    }

    findTheMovie.quantity --;
    setMoviesBag(newMovieBag);
  }

  return (
    <div className="App">
      <Header
        setMovieTitleFilter={ setMovieTitleFilter }    
      />
      <div className="big-content">
        <main className="content">
          <div className="banner-promocao">
          <PromotionBanner/>
          </div>
          <div className="top-movies">
            <h2>Top FILMES</h2>
            <div className="movies-grid">
            {movies.slice(0, 5).map(movie => (
                <MovieCard 
                  movie={movie}
                  handleStarredStar={handleStarredStar}
                  handleMovieBuy={handleMovieBuy}
                />))}
            </div>
          </div>
          <div className="footer-movies">
            <h1>{ movieTitleFilter }</h1>
            <div className="footer-movies__generos">
              <Filters
                movieCategory={ movieCategory }
                setMovieCategory={ setMovieCategory }      
              />
            </div>
            <div className="movies-grid">
            {movies.filter(returnMovie).map(movie => (
                <MovieCard 
                  movie={movie}
                  handleStarredStar={handleStarredStar}
                  setMovieCategory={ setMovieCategory }
                  handleMovieBuy={handleMovieBuy}
                />))}
            </div>
          </div>
        </main>
          <TheBag
            ourBag={moviesBag}
            addANewMovie={addANewMovie}
            removeAMovie={removeTheMovie}
            removeQuantityMovie={removeQuantityMovie}
          />
      </div>
    </div>
  );
}

export default App;