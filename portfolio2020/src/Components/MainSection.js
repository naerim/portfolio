import React from "react";
import styled from "styled-components";

const Contents = styled.div`
  padding-top: 7%;
`;
const IntroduceBox = styled.div`
  text-align: center;
`;

const TitleBox = styled.div`
  display: inline-box;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 3.5vw;
`;

const TitleName = styled.h1`
  color: yellow;
  margin: 0;
  font-size: 3.5vw;
`;

const Introduce = styled.h4`
  font-size: 2.5vw;
  margin: 0;
  color: white;
`;

const PressDown = styled.div`
  font-size: 2vw;
  margin-top: 7%;
  color: white;
`;

const SelectBox = styled.div`
  margin-top: 3%;
  padding: 1%;
  text-align: center;
  float: center;
`;

const GameButton = styled.div`
  background-color: rgba(0, 0, 0, 0);
  padding: 5px 40px;
  color: yellow;
  border: solid yellow 3px;
  font-size: 1.5rem;
  border-radius: 7px;
  margin: 30px 40%;
  text-align: center;
  &: hover {
    background-color: rgba(150, 150, 150, 0.2);
    font-size: 1.7rem;
  }
`;

const MainSection = () => {
  return (
    <Contents>
      <IntroduceBox>
        <TitleBox>
          <Title>Hi! I'm Developer &nbsp;</Title>
          <TitleName> Kim Nae-Rim</TitleName>
        </TitleBox>
        <Introduce>This is my portfolio website</Introduce>
        <PressDown>-> Press here to start</PressDown>
      </IntroduceBox>
    </Contents>
  );
};

// <SelectBox>
//   <GameButton>ABOUT</GameButton>
//   <GameButton>PROJECTS</GameButton>
//   <GameButton>CONTACT</GameButton>
// </SelectBox>

export default MainSection;
