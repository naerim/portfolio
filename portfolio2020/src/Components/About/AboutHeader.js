import React from "react";
import styled from "styled-components";

const About = styled.div`
  text-align: center;
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  color: white;
  text-shadow: -2px 0 red, 0 2px red, 2px 0 red, 0 -2px red;
`;

const AboutHeader = () => {
  return (
    <About>
      <AboutTitle>STAGE 1</AboutTitle>
    </About>
  );
};

export default AboutHeader;
