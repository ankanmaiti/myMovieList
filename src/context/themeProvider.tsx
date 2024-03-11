import { useLocalStorage } from "@hooks/useBrowserStorage";
import { createContext, useContext, useEffect } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined,
);

export function ThemeProvider({
  children,
  defaultTheme,
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage<Theme>(storageKey, defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(theme);

    return () => {
      root.classList.remove(theme);
    };
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme == "dark" ? "light" : "dark"));
  }

  return (
    <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export default function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
