import React from "react";
import Home from "./Home";
import Gallery from "./Gallery";
import Movie from "./Movie";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/movie" component={Movie} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
