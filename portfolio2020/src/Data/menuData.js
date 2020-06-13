import React from "react";
import styled from "styled-components";

const Menuitem = styled.li`
  color: #FFF0F0;
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
  return Menu.map((menu) => (<Menuitem>{menu}</Menuitem>));
};

export default MenuData;
