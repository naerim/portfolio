import React from "react";
import styled from "styled-components";

const ATag = styled.a`
  margin: 0;
  text-decoration: none;
  width: 100%;
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

const MenuData = () => {
  const Menu = [
    {
      page: "ABOUT",
      link: "/",
    },
    {
      page: "PROJECTS",
      link: "/",
    },
    {
      page: "CONTACT",
      link: "/",
    }
  ];

  return Menu.map(({page, link}) => (
    <ATag href={link}>
      <Menuitem>{page}</Menuitem>
    </ATag>
  ));
};

export default MenuData;
