import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SeachIcon from "./search.svg";
import Footer from "./Footer";

//e6d9d517 -- api key
const API_URL = "https://www.omdbapi.com?apikey=e6d9d517";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Harry potter");
  }, []);

  return (
    <>
      <div className="app">
        <h1 className="title">Movie Mania</h1>
        <div className="search">
          <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <img
            src={SeachIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                searchMovies(searchTerm);
              }
            }}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <br />
            <h2>No movies found 🙁</h2>
            <br />
            <br />
            <br />
            <h3>( try Checking the spelling! 🙂 )</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default App;
