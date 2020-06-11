import React from "react";
import Main from "./Sections/Main";
import About from "./Sections/About";
import MainFooter from "./Components/Main/MainFooter";
import Projects from "./Sections/Projects";
import styled from "styled-components";
import Contact from "./Sections/Contact";

const Background = styled.div`
  background-image: url("https://github.com/naerim/portfolio/blob/master/portfolio2020/src/img/cloud.png?raw=true");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0;
  background-attachment: fixed;
`;

function App() {
  return (
    <div className="App">
      <Background>
        <Main />
        <About />
        <Projects />
        <Contact />
        <MainFooter />
      </Background>
    </div>
  );
}

export default App;
