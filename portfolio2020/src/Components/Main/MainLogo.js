import React from "react";
import styled from "styled-components";
import Logo from "../../img/logo.png";

const ImgBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const MainLogo = () => {
  return (
    <ImgBox>
      <Img src={Logo} alt="Logo" />
    </ImgBox>
  );
};

export default MainLogo;
