import React from "react";
import MainHeader from "./Components/MainHeader";
import MainSection from "./Components/MainSection";
import styled from "styled-components";

// background-image: url("https://github.com/naerim/portfolio/blob/master/portfolio2020/src/img/mainBackground.png?raw=true");
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center center;
// background-color: #000033;
//   border-radius: 10px;
const Background = styled.div`
  background: linear-gradient(to top, #1E90FF, #78EAFF);
  margin: 0;
  width: 100%;
  height: 100vh;
`;

const Main = () => {
  return (
    <Background>
       <div>
           <MainHeader />
           <MainSection />
       </div>
    </Background>
  );
};

export default Main;
