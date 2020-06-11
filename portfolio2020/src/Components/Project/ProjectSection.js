import React from "react";
import styled from "styled-components";

const Project = styled.section`
  margin: 10px 50px;
`;

const ProjectDiv = styled.div`
  width: 100%;
  background-color: red;
  height: 80vh;
`;

const ProjectSection = () => {
  return (
    <Project>
      <ProjectDiv>
        <div>project1</div>
      </ProjectDiv>
    </Project>
  );
};

export default ProjectSection;
