import React from "react";
import AboutHeader from "../Components/About/AboutHeader";
import AboutSection1 from "../Components/About/AboutSection1";
import AboutSection2 from "../Components/About/AboutSection2";
import styled from "styled-components";

const AboutDiv = styled.div`
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
