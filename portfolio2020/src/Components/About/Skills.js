import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  height: 100px;
  margin: 10px 50px;
    display: inline-block;
`;

const SkillDiv = styled.div`
  width: 100%;
  background-color: purple;
`;

const Skills = () => {
  return (
    <SkillsSection>
      <SkillDiv>
        <div className="CPlusPlus">
          <h3>C++</h3>
          <div> </div>
        </div>
        <div className="Java">
          <h3>JAVA</h3>
          <div> </div>
        </div>
        <div className="HTML">
          <h3>HTML</h3>
          <div> </div>
        </div>
        <div className="CSS">
          <h3>CSS</h3>
          <div> </div>
        </div>
        <div className="Javascript">
          <h3>Javascript</h3>
          <div> </div>
        </div>
        <div className="React">
          <h3>React</h3>
          <div> </div>
        </div>
      </SkillDiv>
    </SkillsSection>
  );
};

export default Skills;
