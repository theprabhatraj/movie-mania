import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year} </p>
      </div>

      <div>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
      </div>
      <div>
        <span>{movie.Type}</span>
        <a rel="noreferrer" href={"https://www.imdb.com/title/" + movie.imdbID} target="_blank">
          <h3>{movie.Title}</h3>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
