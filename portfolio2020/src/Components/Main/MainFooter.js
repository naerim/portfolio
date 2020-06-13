import React from "react";
import styled from "styled-components";
import IconData from "../../Data/iconData";

const Footer = styled.div`
  width: 100%;
  height: 100px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.h6`
  display: flex;
  justify-content: center;
  color: #2d2300;
  margin-top: 10px;
  margin-bottom: 0;
`;

const MainFooter = () => {
  return (
    <Footer>
      <Icon>
        <IconData />
      </Icon>
      <Bottom>©2020 by portfolio Proudly created with Kim Nae-Rim </Bottom>
    </Footer>
  );
};

export default MainFooter;
