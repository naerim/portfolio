import React from "react";
import ProjectHeader from "./Components/Project/ProjectHeader";
import styled from "styled-components";
import ProjectSection from "./Components/Project/ProjectSection";

const ProjectDiv = styled.div`

`;
const Projects = () => {
    return (
        <ProjectDiv>
            <ProjectHeader/>
            <ProjectSection/>
        </ProjectDiv>
    );
}

export default Projects;