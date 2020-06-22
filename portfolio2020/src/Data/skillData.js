import React from "react";
import styled from "styled-components";

const SkillDiv = styled.div`
  width: 100%;
  display: flex;
`;

const SkillName = styled.div`
  width: 15%;
  float: center;
  text-align: center;
`;

const SkillLevel = styled.div`
  margin: 20px;
  background: yellow;
  width: ${(props) => props.width || 10}%;
`;

const SkillData = () => {
  const Skills = [
    {
      name: "C++",
      width: 80,
    },
    {
      name: "JAVA",
      width: 50,
    },
    {
      name: "HTML",
      width: 60,
    },
    {
      name: "CSS",
      width: 70,
    },
    {
      name: "Javascript",
      width: 40,
    },
    {
      name: "React",
      width: 30,
    },
  ];

  return Skills.map(({ name, width }) => (
    <SkillDiv>
      <SkillName>
        <h1>{name}</h1>
      </SkillName>
      <SkillLevel width={width}> </SkillLevel>
    </SkillDiv>
  ));
};

export default SkillData;
