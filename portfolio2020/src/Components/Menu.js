import React, { useState } from "react";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuData from "../Data/menuData";

const MenuBox = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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
  margin: 30px 30%;
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
