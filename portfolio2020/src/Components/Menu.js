import React, { useState } from "react";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuData from "../Data/menuData";
import MainLogo from "./Main/MainLogo";

const MenuBox = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoBox = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const IntroduceBox = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
  margin-bottom: 20px;
  font-size: 1.5rem;
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
  width: 500px;
  padding: 0;
  text-align: center;
  margin: 10px auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;
    display: ${({ open }) => (open ? "none" : "block")};
  }
`;

const Menu = () => {
  const [open, setOpen] = useState(true);
  const toggleHamburger = () => {
    setOpen(!open);
  };

  return (
    <MenuBox>
      <LogoBox>
        <MainLogo />
      </LogoBox>
      <IntroduceBox>Developer Naerim</IntroduceBox>
      <MenuUl open={open}>
        <MenuData />
      </MenuUl>

      <Hamburger onClick={() => toggleHamburger()}>
        <FontAwesomeIcon icon={faBars} color="#FFF0F0" />
      </Hamburger>
    </MenuBox>
  );
};

export default Menu;
