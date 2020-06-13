import React, { useState } from "react";
import styled from "styled-components";
import MainLogo from "./Main/MainLogo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuData from "../Data/menuData";

//  background-color: #6ee0ff;
const MenuBox = styled.div`
  position: fixed;
  width: 100%;

  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoDiv = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFF0F0;
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

const ATag = styled.a`
  margin: 0;
  text-decoration: none;
  width: 100%;
`;

const Menu = () => {
  const [open, setOpen] = useState(true);
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
          <MenuData/>
        </ATag>
      </MenuUl>

      <Hamburger onClick={() => toggleHamburger()}>
        <FontAwesomeIcon icon={faBars} color="#FFF0F0" />
      </Hamburger>
    </MenuBox>
  );
};

export default Menu;
