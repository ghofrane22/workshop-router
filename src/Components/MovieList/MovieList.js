import MovieCard from "../MovieCard/MovieCard";
import "./Style.css";

const Movielist = ({ filteredMovies }) => {
  return (
    <div
      className="movie-list"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: " wrap",
      }}
    >
      {filteredMovies.map((movie, index) => {
        return <MovieCard movie={movie} key={index} />;
      })}
    </div>
  );
};

export default Movielist;
