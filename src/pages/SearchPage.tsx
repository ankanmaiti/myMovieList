import MovieList from "@components/Movies/list";
import SearchField from "@components/SearchField";

export default function SearchPage() {
  return (
    <>
      <section>
        <SearchField />
      </section>
      <main>
        <MovieList />
      </main>
    </>
  );
}
