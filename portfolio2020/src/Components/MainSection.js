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
  font-size: 7vw;
`;

const TitleName = styled.h1`
  color: yellow;
  margin: 0;
  font-size: 4vw;
`;

const Introduce = styled.h4`
  font-size: 1.5vw;
  margin: 0;
  color: white;
`;

const PressDown = styled.div`
  font-size: 2vw;
  margin-top: 7%;
  color: white;
`;

const MainSection = () => {
  return (
    <Contents>
      <IntroduceBox>
        <TitleBox>
          <Title>Developer</Title>
          <TitleName> <br/>Kim Nae-Rim</TitleName>
        </TitleBox>
        <Introduce>Hi! This is my portfolio website</Introduce>
        <PressDown>-> Press here to start</PressDown>
      </IntroduceBox>
    </Contents>
  );
};

export default MainSection;
