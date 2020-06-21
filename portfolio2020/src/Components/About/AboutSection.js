import React from "react";
import styled from "styled-components";
import Profile from "../../img/profile.jpg";
import Skills from "./Skills";

const About = styled.section`
  margin: 10px 50px;
`;

const AboutDiv = styled.div`
  width: 100%;
  background-color: red;
  height: 850px;
`;

const AboutBox = styled.div`
  text-align: center;
  align-items: center;
`;

const ImageBox = styled.div`
  margin: 20px;
  display: inline-block;
  width: 250px;
  background: blue;
`;

const ProfileImage = styled.img`
  width: 100%;
`;

const IntroduceBox = styled.div`
  margin: 20px;
  background-color: green;
  display: inline-block;
`;

const LevelDiv = styled.div`
  background: yellow;
  text-align: center;
`;

const LevelBox = styled.div`
  display: inline-block;
  background: orange;
  width: 80%;
  height: 15px;
`;

const SkillBox = styled.div`
  display: inline-block;
`;

const AboutSection = () => {
  return (
    <About>
      <AboutDiv>
        <AboutBox>
          <ImageBox>
            <ProfileImage src={Profile} alt="MyPhoto" />
            <h3>EXP 19991119</h3>
          </ImageBox>
          <IntroduceBox>
            <LevelDiv>
              <h3>LV.22</h3>
              <LevelBox> </LevelBox>
            </LevelDiv>
            <h3>Class: Student</h3>
            <div className="HPMP">
              <img src="#" alt="HPMP" />
            </div>
            <div className="Introduce">
              <h4>안녕하세요. 저는 개발자 김내림입니다.</h4>
            </div>
          </IntroduceBox>
        </AboutBox>

        <SkillBox>
          <h1>SKills</h1>
          <Skills />
        </SkillBox>
      </AboutDiv>
    </About>
  );
};

export default AboutSection;
