import useFetchMovieList from "@hooks/useFetchMovieList";
import MoviePoster from "./MoviePoster";

export default function MovieList() {
  const { list } = useFetchMovieList();

  return (
    <>
      <div className="grid gap-2 grid-cols-2 md:gap-4 md:grid-cols-4 lg:grid-cols-6 py-4">
        {list?.map((movie) => (
          <MoviePoster
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </>
  );
}
