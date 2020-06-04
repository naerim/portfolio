import React from "react";
import Main from "./Main";
import About from "./About";
import MainFooter from "./Components/MainFooter";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Main />
      <About/>
      <Projects/>
      <MainFooter/>
    </div>
  );
}

export default App;
