import React from "react";
import styled from "styled-components";
import titleFont from "../img/title.png";

const Contents = styled.div``;
const IntroduceBox = styled.div`
  text-align: center;
`;

const TitleBox = styled.div`
  padding-top: 10px;
`;

const Title = styled.img`
  width: 700px;

  @media (max-width: 768px) {
    padding-top: 10%;
    width: 80vw;
  }
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
          <Title src={titleFont} alt="title" />
        </TitleBox>
        <PressDown>-> Press here to start</PressDown>
        <br/> <br/>
        <Introduce>Hi! This is my portfolio website</Introduce>
      </IntroduceBox>
    </Contents>
  );
};

export default MainSection;
