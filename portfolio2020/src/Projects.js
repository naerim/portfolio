import React from "react";
import ProjectHeader from "./Components/ProjectHeader";
import styled from "styled-components";

const ProjectDiv = styled.div`
background-color: #331449;
`;
const Projects = () => {
    return (
        <ProjectDiv>
            <ProjectHeader/>
        </ProjectDiv>
    );
}

export default Projects;