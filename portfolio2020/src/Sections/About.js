import React from "react";
import AboutHeader from "../Components/About/AboutHeader";
import AboutSection from "../Components/About/AboutSection";
import styled from "styled-components";

const AboutDiv = styled.div`
`;

const About = () => {
  return (
    <AboutDiv>
      <AboutHeader />
      <div className="AboutSection">
        <AboutSection />
      </div>
    </AboutDiv>
  );
};

export default About;
