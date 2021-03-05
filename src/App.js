import React from "react";
import { Route, Switch } from "react-router-dom";

// Import Style
import GlobalStyle from "./components/GlobalStyle";

// Import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <AboutUs />
        </Route>

        <Route exact path='/work'>
          <OurWork />
        </Route>

        <Route path='/work/:id'>
          <MovieDetail />
        </Route>

        <Route exact path='/contactus'>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
