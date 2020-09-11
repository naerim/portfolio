import React from "react";
import styled from "styled-components";
import Menu from "../Components/Menu";

const Main = () => {
  return (
    <MainContainer>
        <Menu/>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100vh;
`;

export default Main;
