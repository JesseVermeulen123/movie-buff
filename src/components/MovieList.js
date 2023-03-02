// Movie List Component
const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          {/* Top Overlay */}
          <div className="top-overlay d-flex">
            <ul>
              <li>
                <strong>Title:</strong> {movie.Title}
              </li>
              <li>
                <strong>Year:</strong> {movie.Year}
              </li>
              <li>
                <strong>Type:</strong> {movie.Type}
              </li>
              <li>
                <strong>IMDB ID:</strong> {movie.imdbID}
              </li>
            </ul>
          </div>

          {/* Poster */}
          <img src={movie.Poster} alt={movie.Title} title={movie.Title}></img>

          {/* Bottom Overlay */}
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="bottom-overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
