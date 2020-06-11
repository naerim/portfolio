import React from "react";
import styled from "styled-components";

const About = styled.section`
  margin: 10px 50px;
`;

const AboutDiv = styled.div`
  width: 100%;
  background-color: red;
  height: 80vh;
`;

const AboutSection1 = () => {
  return (
    <About>
      <AboutDiv>
        <div className="Title">
          <h2>ABOUT</h2>
        </div>
        <div className="AboutBox">
          <div className="Image">
            <img src="#" alt="MyPhoto" />
            <h5>EXP 19991119</h5>
          </div>
          <div className="Level">
            <h3>LV.22</h3>
            <div className="LevelBox">
              <img src="#" alt="Level" />
            </div>
          </div>
          <h3>Class: Student</h3>
          <div className="HPMP">
            <img src="#" alt="HPMP" />
          </div>
          <div className="Introduce">
            <h4>안녕하세요. 저는 개발자 김내림입니다.</h4>
          </div>
        </div>
      </AboutDiv>
    </About>
  );
};

export default AboutSection1;
