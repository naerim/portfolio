import React from "react";
import MainHeader from "../Components/Main/MainHeader";
import MainSection from "../Components/Main/MainSection";
import styled from "styled-components";

// background: linear-gradient(to top, #1e90ff, #78eaff);
// margin: 0;
// width: 100%;
// height: 100vh;
const Background = styled.div`

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
