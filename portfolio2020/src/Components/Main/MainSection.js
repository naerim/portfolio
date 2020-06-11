import React from "react";
import styled from "styled-components";

const Contents = styled.div``;
const IntroduceBox = styled.div`
  text-align: center;
`;

const TitleBox = styled.div`
  padding-top: 10%;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-shadow: 5px 5px 0 red;
  color: white;
`;

const Introduce = styled.h4`
  justify-content: space-between;
  align-items: center;
  font-size: 1.5vw;
  margin: 0;
  color: white;
`;

const PressDown = styled.div`
  font-size: 2vw;
  color: white;
`;

const MainSection = () => {
  return (
    <Contents>
      <IntroduceBox>
        <TitleBox>
          <Title>Developer</Title>
        </TitleBox>
        <PressDown>-> Press here to start</PressDown>
        <Introduce>Hi! This is my portfolio website</Introduce>
      </IntroduceBox>
    </Contents>
  );
};

export default MainSection;
