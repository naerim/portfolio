import React from "react";
import styled from "styled-components";
import Menu from "../Components/Menu";
import MainContent from "../MainContent";

const Main = () => {
  return (
    <MainContainer>
      <Menu />
      <MainContent/>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100vh;
`;

export default Main;
