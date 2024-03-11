import { useEffect, useState } from "react";

type StorageType = "localStorage" | "sessionStorage";

export function useBrowserStorage<T>(
  type: StorageType,
  key: string,
  initial: T | (() => T),
) {
  const storage = type == "localStorage" ? localStorage : sessionStorage;
  const [data, setData] = useState<T>(() => {
    const storedData = storage.getItem(key);
    if (storedData) return JSON.parse(storedData);

    return initial;
  });

  useEffect(() => {
    storage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData] as const;
}

export function useLocalStorage<T>(key: string, initial: T | (() => T)) {
  return useBrowserStorage("localStorage", key, initial);
}


export function useSessionStorage<T>(key: string, initial: T | (() => T)) {
  return useBrowserStorage("sessionStorage", key, initial);
}
