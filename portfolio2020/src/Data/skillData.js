import React from "react";
import styled from "styled-components";

const ATag = styled.a`
  margin: 0;
  text-decoration: none;
  width: 100%;
`;

const SkillName = styled.div`
`;

const SkillLevel = styled.div`
`;

const Menuitem = styled.li`
  color: #fff0f0;
  list-style: none;
  float: center;
  text-align: center;
  font-size: 1rem;
  padding: 5px 10px;
  text-decoration: none;
  margin-left: 10px;

  @media (max-width: 768px) {
    padding: 5px 0px;
    margin: 0;
    width: 100%;
  }
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
    <SkillName><h1>{name}</h1>
      <SkillLevel> </SkillLevel>
    </SkillName>
  ));
};

export default SkillData;
