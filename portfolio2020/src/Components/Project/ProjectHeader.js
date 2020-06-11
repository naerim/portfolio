import React from "react";
import styled from "styled-components";

const Project = styled.div`
  text-align: center;
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  color: white;
  text-shadow: -2px 0 red, 0 2px red, 2px 0 red, 0 -2px red;
`;

const ProjectHeader = () => {
  return (
    <Project>
      <ProjectTitle>STAGE 2</ProjectTitle>
    </Project>
  );
};

export default ProjectHeader;
