import React from "react";
import styled from "styled-components";
import Logo from "../img/logo.png";

const ImgBox = styled.div`
  width: 40px;
`;
const Img = styled.img`
  width: 100%;
  float: center;
`;

const MainLogo = () => {
  return (
    <ImgBox>
      <Img src={Logo} alt="Logo" />
    </ImgBox>
  );
};

export default MainLogo;
