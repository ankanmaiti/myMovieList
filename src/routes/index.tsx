import HomePage from "@/pages/HomePage";
import MovieDetailPage from "@/pages/MovieDetailPage";
import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:movieName",
    element: <MovieDetailPage />
  },
];

const router = createBrowserRouter(routes);
export default router;
