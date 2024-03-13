import { useEffect, useState } from "react";

export default function useFetch<T>(
  baseUrl: string = "",
  init: RequestInit | undefined = undefined,
) {
  const [url, setUrl] = useState(baseUrl);

  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    setIsLoading(true);

    fetch(url, init)
      .then((res) => res.json())
      .then((data) => setData(data as T))
      .catch((err) => setError(err.status_message as string))
      .finally(() => setIsLoading(false));
  }, [url]);

  return {
    data,
    isLoading,
    error,
    setUrl,
  } as const;
}
