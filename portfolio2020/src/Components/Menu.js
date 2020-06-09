import React, { useState } from "react";
import styled from "styled-components";
import MainLogo from "./MainLogo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuBox = styled.div`
  position: fixed;
  width: 100%;

  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6ee0ff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    background-color: #6ee0ff;
  }
`;

const LogoDiv = styled.div`
margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Hamburger = styled.div`
  cursor: pointer;
  display: none;
  position: absolute;
  right: 30px;
  top: 15px;
  font-size: 24px;


  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;
    display: ${({ open }) => (open ? "none" : "block")};
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
    padding:  5px 0px;
    margin: 0;
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

const ATag = styled.a`
  margin: 0;
  text-decoration: none;
  width: 100%;
`;

const Menu = () => {
  const [open, setOpen] = useState(false);
  const toggleHamburger = () => {
    setOpen(!open);
  };

  return (
    <MenuBox>
      <LogoDiv>
        <MainLogo />
        <h5>Developer Naerim</h5>
      </LogoDiv>

      <MenuUl open={open}>
        <ATag href="/">
          <Menuitem yellow={true}>ABOUT</Menuitem>
        </ATag>
        <ATag href="/">
          <Menuitem green={true}>PROJECTS</Menuitem>
        </ATag>
        <ATag href="/">
          <Menuitem red={true}>CONTACT</Menuitem>
        </ATag>
      </MenuUl>

      <Hamburger onClick={() => toggleHamburger()}>
        <FontAwesomeIcon icon={faBars} color="white" />
      </Hamburger>
    </MenuBox>
  );
};

export default Menu;
