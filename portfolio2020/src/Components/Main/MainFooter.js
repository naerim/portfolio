import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBloggerB,
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
  color: #2D2300;
  margin-top: 10px;
  margin-bottom: 0;
`;

const IconTag = styled.a`
  margin: 15px 15px;
  text-decoration: none;
`;

const MainFooter = () => {
  return (
    <Footer>
      <Icon>
        <IconTag href="/">
          <FontAwesomeIcon icon={faGithub} color="#2D2300" size="2x" />
        </IconTag>
        <IconTag href="/">
          <FontAwesomeIcon icon={faFacebook} color="#2D2300" size="2x" />
        </IconTag>
        <IconTag href="/">
          <FontAwesomeIcon icon={faBloggerB} color="#2D2300" size="2x" />
        </IconTag>
        <IconTag href="/">
          <FontAwesomeIcon icon={faYoutube} color="#2D2300" size="2x" />
        </IconTag>
      </Icon>
      <Bottom>©2020 by portfolio Proudly created with Kim Nae-Rim </Bottom>
    </Footer>
  );
};

export default MainFooter;
