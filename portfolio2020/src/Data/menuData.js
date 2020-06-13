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
  const Menu = ["ABOUT", "PROJECTS", "CONTACT"];
  const Link = (index) => {
    return index === 0 && "http://www.naver.com";
  };

  return Menu.map((menu, key) => (
    <ATag href={Link(key)}>
      <Menuitem>{menu}</Menuitem>
    </ATag>
  ));
};

export default MenuData;
