import React from "react";
import MainHeader from "./Components/MainHeader";
import MainSection from "./Components/MainSection";
import styled from "styled-components";

// background-image: url("https://github.com/naerim/portfolio/blob/master/portfolio2020/src/img/mainBackground.png?raw=true");
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center center;

const Background = styled.div`
  background-color: #000033;
  width: 100%;
  height: 100vh;
  border-radius: 10px;
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
