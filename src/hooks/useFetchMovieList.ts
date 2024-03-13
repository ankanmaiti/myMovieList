import { useSearchParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect } from "react";

interface MovieResponse {
  adult: boolean;
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}

export default function useFetchMovieList() {
  const { isLoading, data, error, setUrl } = useFetch<Record<string, unknown>>(
    `${import.meta.env.VITE_MOVIE_LIST_URL}?api_key=${import.meta.env.VITE_API_KEY}`,
  );
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query") ?? "";

    setUrl((url) => {
      const newUrl = new URL(url);

      query && newUrl.searchParams.set("query", query);
      !query && newUrl.searchParams.delete("query");

      return newUrl.toString();
    });
  }, [searchParams]);

  return {
    isLoading,
    error,
    list: data?.results as MovieResponse[],
  };
}
