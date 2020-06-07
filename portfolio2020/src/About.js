import React from "react";
import AboutHeader from "./Components/AboutHeader";
import AboutSection1 from "./Components/AboutSection1";
import AboutSection2 from "./Components/AboutSection2";
import styled from "styled-components";

const AboutDiv = styled.div`
background: linear-gradient(to bottom, #4f0190, black);

`;
const About = () => {
  return (
    <AboutDiv>
      <AboutHeader />
      <div className="AboutSection">
        <AboutSection1 />
        <AboutSection2 />
      </div>
    </AboutDiv>
  );
};

export default About;
