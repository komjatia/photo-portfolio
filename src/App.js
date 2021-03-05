import React from "react";
import { Route, Switch } from "react-router-dom";

// Import Style
import GlobalStyle from "./components/GlobalStyle";

// Import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ourWork from "./pages/ourWork";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <AboutUs />
        </Route>

        <Route exact path='/ourwork'>
          <ourWork />
        </Route>

        <Route exact path='/contactus'>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
