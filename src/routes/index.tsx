import HomePage from "@/pages/HomePage";
import MovieDetailPage from "@/pages/MovieDetailPage";
import Navbar from "@layouts/Navbar";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const routes = createRoutesFromElements(
  <Route path="/" element={<Navbar />}>
    <Route index element={<HomePage />} />
    <Route path="/:movieName" element={<MovieDetailPage />} />
  </Route>,
);

const router = createBrowserRouter(routes);
export default router;
