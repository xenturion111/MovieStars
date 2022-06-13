import React, { useEffect ,useState } from 'react'
import './App.css'

import Movie from './components/movie'
import Searchbar from './components/search'

const FEATURE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4b4d03baae6c0065365ca17ffa81ad75&page1";



function App() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch(FEATURE_API)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    })
  }, []);
  return (
    <div className='App'>
      <Searchbar />
      <div className="movie-container">
          {movies.map((movie) =>(
              <Movie key={movie.id} {...movie} />
            ))}
      </div>
    </div>
    
  )
}

export default App
