import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

// Import Style
import GlobalStyle from "./components/GlobalStyle";

// Import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/ourWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const locations = useLocation();
  console.log(locations);
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence>
        <Switch location={locations} key={locations.key}>
          <Route exact path='/'>
            <AboutUs />
          </Route>

          <Route path='/work'>
            <OurWork />
          </Route>

          <Route path='/work/:id'>
            <MovieDetail />
          </Route>

          <Route exact path='/contactus'>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
