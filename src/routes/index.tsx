import SearchPage from "@/pages/SearchPage";
import MovieDetailPage from "@/pages/MovieDetailPage";
import Navbar from "@layouts/Navbar";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const routes = createRoutesFromElements(
  <Route path="/" element={<Navbar />}>
    <Route path="/search" element={<SearchPage />} />
    <Route path="/:movieName" element={<MovieDetailPage />} />
  </Route>,
);

const router = createBrowserRouter(routes);
export default router;
