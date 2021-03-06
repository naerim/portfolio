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
  margin: 0;
  font-size: 4rem;
  text-shadow: 5px 5px 0 red;
  color: #fff0f0;

  ${(props) =>
    props.green &&
    `
    text-shadow: 5px 5px 0 green;
  `}
`;

const Introduce = styled.h4`
  justify-content: space-between;
  align-items: center;
  font-size: 1.5vw;
  margin: 0;
  color: black;
  
`;

const PressDown = styled.div`
  margin: 70px 0px;
  font-size: 1.5rem;
  font-weight: bold;
  color: dark-blue;
  
    &:hover {
    font-size: 1.7rem;
  }
`;

const MainSection = () => {
  return (
    <Contents>
      <IntroduceBox>
        <TitleBox>
          <Title>Developer</Title>
          <Title green={true}>Kim-NaeRim</Title>
        </TitleBox>
        <PressDown>-> Press here to start</PressDown>
        <Introduce>Hi! This is my portfolio website</Introduce>
      </IntroduceBox>
    </Contents>
  );
};

export default MainSection;
