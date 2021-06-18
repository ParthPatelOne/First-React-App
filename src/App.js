import React from "react";
// import { Content } from "./components/Content";
import { Toggle } from "./components/Toggle";
import { useDarkMode } from "./styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/globalStyles";
import styled, { ThemeProvider } from "styled-components";
import Home from "./Home";
import Gallery from "./Gallery";
import Movie from "./Movie";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// const Container = styled.div`
//   max-width: 50%;
//   margin: 8rem auto 0;
// `;

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
      {/* <Content /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/movie" component={Movie} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
