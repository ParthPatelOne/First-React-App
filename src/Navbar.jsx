import React from "react";
import { Link } from "react-router-dom";

import { Toggle } from "./components/Toggle";
import { useDarkMode } from "./styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/globalStyles";
import styled, { ThemeProvider } from "styled-components";
const Navbar = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <header className="text-gray-600 body-font NAV">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            exact
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src="./img/load-gif.gif"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-12 h-12 text-white p-1 bg-gray-50 rounded-full"
            />
            <span className="ml-2 text-xl NM">PARTH PATEL</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-blue-500">
              Home
            </Link>
            <Link to="/gallery" className="mr-5 hover:text-blue-500">
              Gallery
            </Link>
            <Link to="/movie" className="mr-5 hover:text-blue-500">
              Movies
            </Link>
            <a className="mr-5 hover:text-gray-50">
              <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                <Toggle theme={theme} toggleTheme={toggleTheme} />
              </ThemeProvider>
            </a>
          </nav>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Navbar;
