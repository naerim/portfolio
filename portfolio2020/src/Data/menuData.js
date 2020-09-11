import React from "react";
import styled from "styled-components";

const ATag = styled.a`
  text-decoration: none;
  width: 100%;
`;

const Menuitem = styled.li`
  color: #B2C22B;
  list-style: none;
  float: center;
  text-align: center;
  font-size: 1rem;
  text-decoration: none;

  @media (max-width: 768px) {
    padding: 5px 0px;
    margin: 0;
    width: 100%;
  }
`;

const MenuData = () => {
  const Menu = [
    {
      key: 1,
      page: "ABOUT",
      link: "/",
    },
    {
      key: 2,
      page: "PROJECTS",
      link: "/",
    },
    {
      key: 3,
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
