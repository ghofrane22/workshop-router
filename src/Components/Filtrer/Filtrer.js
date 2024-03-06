import Movielist from "../MovieList/MovieList";

const Filtrer = ({ rating, searchInput, movieData }) => {
  // Utilisez la méthode filter() pour filtrer les données
  var filteredMovies = movieData.filter(
    (movie) =>
      movie.title && // Vérifiez si movie.title est défini
      movie.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      movie.rating >= rating
  );
  return (
    <div>
      <Movielist filteredMovies={filteredMovies} />
    </div>
  );
};
export default Filtrer;
