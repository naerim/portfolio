import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBloggerB,
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const IconTag = styled.a`
  margin: 15px 15px;
  text-decoration: none;
`;

const IconData = () => {
  const Menu = [
    {
      icon: faGithub,
      link: "/",
    },
    {
      icon: faFacebook,
      link: "/",
    },
    {
      icon: faBloggerB,
      link: "/",
    },
    {
      icon: faYoutube,
      link: "/",
    },
  ];

  return Menu.map(({ icon, link }) => (
    <IconTag href={link}>
      <FontAwesomeIcon icon={icon} color="#2D2300" size="2x" />
    </IconTag>
  ));
};

export default IconData;
