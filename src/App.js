import React, { useState } from "react";

import MovieList from "./components/MovieList";
import './index.css'
function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Indiana Jones and the Raiders of the Lost Ark",
      Year: "1981",
      imdbID: "tt0082971",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg",
    },
    {
      Title: "Indiana Jones and the Last Crusade",
      Year: "1989",
      imdbID: "tt0097576",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2Q0ODg4ZmItNDZiYi00ZWY5LTg2NzctNmYwZjA5OThmNzE1XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg",
    },
    {
      Title: "Indiana Jones and the Temple of Doom",
      Year: "1984",
      imdbID: "tt0087469",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzgzMTIzNzctNmNiZC00ZDYyLWJjNzktMmQ2MDM2ZDkwZGVhXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg",
    },
    {
      Title: "Indiana Jones and the Kingdom of the Crystal Skull",
      Year: "2008",
      imdbID: "tt0367882",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmY5ZTk3ZDMtZjA1MS00NzU4LTk5ZDItYmNhOTkxMGYxMjRlXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Young Indiana Jones Chronicles",
      Year: "1992-1993",
      imdbID: "tt0103586",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjRlYzQ3NmUtZjRjMi00MGJlLWIwOTItNTE2NjRhNTA2NWNmXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
    },
    {
      Title: "Lego Indiana Jones: The Original Adventures",
      Year: "2008",
      imdbID: "tt1149318",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMThkYjA2NDUtYjAyNS00ZDNkLThhYTgtMmFhNzIxZWFiYjYyXkEyXkFqcGdeQXVyOTA1ODU0Mzc@._V1_SX300.jpg",
    },
    {
      Title: "Indiana Jones and the Fate of Atlantis",
      Year: "1992",
      imdbID: "tt0245165",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDhmNTZjZDQtM2Y4OS00NWI3LWIzMGEtMTYxNGEzY2UwOWUzXkEyXkFqcGdeQXVyMzMxNDQ0NQ@@._V1_SX300.jpg",
    },
  ]);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
