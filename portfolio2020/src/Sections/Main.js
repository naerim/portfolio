import React from "react";
import MainHeader from "../Components/Main/MainHeader";
import MainSection from "../Components/Main/MainSection";
import styled from "styled-components";

const Background = styled.div`
  height: 100vh;
`;

const Main = () => {
  return (
    <div>
      <Background>
        <MainHeader />
        <MainSection />
      </Background>
    </div>
  );
};

export default Main;
