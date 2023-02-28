import React from 'react';

import { useEffect, useState } from 'react';


import MovieCard from './MovieCard';
// db02c822
import './App.css';
import SeachIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=db02c822';


const Movie1 =  {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
  };

const App =() => {

    const [movies,SetMovies] = useState([]);
    const [searchterm,SetSearchTerm] = useState("");

    const searchMovies = async(title)=> {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        SetMovies(data.Search);

    };
    useEffect(() =>{ 
        searchMovies('Shrek');

    },[]);
    return(
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
             <input
          value={searchterm}
          onChange={(e) => SetSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
            <img src={SeachIcon} alt="Search"  onClick={()=>searchMovies(searchterm)}/>
        </div>
        {
            movies?.length > 0
            ?(
                <div className="container">
                   {movies.map((movie)=>(
                   <MovieCard movie={movie} /> ))}
                </div>
            ):(
                <div className="empty">
                    <h2> No movies Found</h2>
                </div>
            )
        }

       
    </div>
        )};

export default App;
