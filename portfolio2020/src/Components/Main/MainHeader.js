import React from "react";
import styled from "styled-components";
import Menu from "../Menu";

const HeaderBox = styled.div`
  padding: 0;
  margin: 0;
`;

const MainHeader = () => {
  return (
    <HeaderBox>
      <Menu />
    </HeaderBox>
  );
};

export default MainHeader;
