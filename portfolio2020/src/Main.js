import React from "react";
import MainHeader from "./Components/MainHeader";
import MainSection from "./Components/MainSection";
import styled from "styled-components";

const Background = styled.div`
  background-image: url("https://github.com/naerim/portfolio/blob/master/portfolio2020/src/img/mainBackground.png?raw=true");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
`;

const Main = () => {
  return (
    <Background>
      <MainHeader />
      <MainSection />
    </Background>
  );
};

export default Main;
