import React from "react";
import styled from "styled-components";
import SkillData from "../../Data/skillData";

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
        <SkillData />
      </SkillDiv>
    </SkillsSection>
  );
};

export default Skills;
