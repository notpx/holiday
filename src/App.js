import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Superhero from "./components/Superhero";
import SectionC from "./components/SectionC";
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Hero/>
      <Superhero/>
      <SectionC/>
    </div>
  );
}

export default App;
