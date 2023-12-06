import { useState } from "react";
import moviesDataJson from "../movies-data.json";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";
import ImprovedMovieCard from "./ImprovedMovieCard";
import MovieCard from "./MovieCard";

function ImprovedMovieList() {
  const [movies, setMovies] = useState(moviesDataJson);
  const [firstLetter, setFirstLetter] = useState("");
  // const [moviesData, setMoviesData] = useState(moviesDataJson);
  const [showMovies, setShowMovies] = useState(true);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  const toggleShowMovies = () => {
    setShowMovies(!showMovies);
  };

  const addNewMovie = (newMovie) => {
    const updatedMovies = [newMovie, ...movies];
    // const updatedMoviesData = [newMovie, ...moviesData];
    setMovies(updatedMovies);
    // setMoviesData(updatedMoviesData);
  };

  // const filterMovieList = (str) => {
  //   let filteredMovies;
  //   if (str === "All") {
  //     filteredMovies = moviesData;
  //   } else {
  //     filteredMovies = moviesData.filter((movie) => {
  //       return movie.title[0].toLowerCase() === str.toLowerCase();
  //     });
  //   }
  //   setMovies(filteredMovies);
  // };

  let filtered = firstLetter
    ? movies.filter(
        (movie) => movie.title[0].toLowerCase() === firstLetter.toLowerCase()
      )
    : movies;
  return (
    <div>
      <h2>Improved Movie List</h2>
      <AddMovie addNewMovie={addNewMovie} />
      <FilterMovies firstLetter={firstLetter} setFirstLetter={setFirstLetter} />
      <button onClick={toggleShowMovies}>{showMovies ? "Hide" : "Show"}</button>
      {showMovies &&
        filtered.map((movie) => {
          return (
            <ImprovedMovieCard
              key={movie._id}
              movie={movie}
              deleteMovie={deleteMovie}
            />
          );
        })}
    </div>
  );
}

export default ImprovedMovieList;
