import React from "react";
import styled from "styled-components";
import MainLogo from "./MainLogo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuBox = styled.div`
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    background-color: #000033;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Hamburger = styled.div`
  position: fixed;
  right: 30px;
  top: 30px;
`;

const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  padding-left: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

const Menuitem = styled.li`
  color: black;
  list-style: none;
  float: center;
  text-align: center;
  font-size: 1rem;
  padding: 5px 10px; 
  text-decoration: none;
  margin-left: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
  }

  ${(props) =>
    props.yellow &&
    `
      color: yellow;
      
      &:hover{
      background-color: rgba(80,80,80,0.5);
      }
    `}
    
  ${(props) =>
    props.green &&
    `
      color: green;
      
      &:hover{
      background-color: rgba(80,80,80,0.5);
      }
    `}
    
  ${(props) =>
    props.red &&
    `
      color: red;
      
      &:hover{
      background-color: rgba(80,80,80,0.5);
      }
    `}
`;

const Menu = () => {
  return (
    <MenuBox>
      <LogoDiv>
        <MainLogo />
        <h5>Developer Naerim</h5>
      </LogoDiv>

      <MenuUl>
        <Menuitem yellow={true}>ABOUT</Menuitem>
        <Menuitem green={true}>PROJECTS</Menuitem>
        <Menuitem red={true}>CONTACT</Menuitem>
      </MenuUl>
      <Hamburger>
        <FontAwesomeIcon icon={faBars} color="white" />
      </Hamburger>
    </MenuBox>
  );
};

export default Menu;
