import React from "react";

// Import Style
import GlobalStyle from "./components/GlobalStyle";

// Import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

function App() {
  return (
    <div className='App'>
      <Nav />
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
