import React from "react";
import MainHeader from "./Components/MainHeader";
import MainSection from "./Components/MainSection";
import styled from "styled-components";

const Game = styled.div`
  margin: 0;
  padding: 30px;

  background: rgb(80,80,80);
  height: 100vh;
`;
const Background = styled.div`
  background-image: url("https://github.com/naerim/portfolio/blob/master/portfolio2020/src/img/mainBackground.png?raw=true");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 90vh;
  
    border-radius: 10px
`;

const Main = () => {
  return (
    <Game>
      <Background>
        <MainHeader />
        <MainSection />
      </Background>
    </Game>
  );
};

export default Main;
