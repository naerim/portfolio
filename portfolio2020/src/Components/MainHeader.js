import React from "react";
import styled from "styled-components";
import MainLogo from "./MainLogo";

const HeaderBox = styled.div`
padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.ul`
   display: flex;
  list-style: none;
  text-align: center;
  padding-left: 0;
`;

const Menuitem = styled.li`
  color: white;
  list-style: none;
  float: center;
  text-align: center;
  font-size: 1rem;
  padding-left: 20px;
  padding-right: 20px;
    text-decoration: none;
    background-color: purple;
    margin-left: 10px;
`;

const MainHeader = () => {
  return (
    <HeaderBox>
      <MainLogo />

      <Menu>
        <Menuitem>ABOUT</Menuitem>
        <Menuitem>PROJECTS</Menuitem>
        <Menuitem>CONTACT</Menuitem>
      </Menu>
    </HeaderBox>
  );
};

export default MainHeader;
