import { PlayIcon } from "@radix-ui/react-icons";
import { NavLink, Outlet } from "react-router-dom";
import Navlink from "./Navlink";
import Container from "./Container";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="sticky inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-secondary">
          <Container>
            <div className="h-14 flex items-center">
              {/*Logo*/}
              <NavLink className="flex items-center text-bold text-xl" to="/">
                <PlayIcon className="scale-125 me-1" />
                <span>MyMovieList</span>
              </NavLink>

              {/* Nav links */}
              <nav className="flex-1">
                <ul className="flex items-center justify-end space-x-4">
                  <Navlink to="/" name="Home" />
                  <Navlink to="/this-is-great" name="Dummy" />
                </ul>
              </nav>
            </div>
          </Container>
        </nav>
      </header>

      <Container>
        <Outlet />
      </Container>
    </>
  );
}
