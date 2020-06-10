import React from "react";
import styled from "styled-components";

const Contact = styled.div`
  text-align: center;
`;

const ContactTitle = styled.h1`
font-size: 3rem;
  color: white;
  text-shadow: -2px 0 red, 0 2px red, 2px 0 red, 0 -2px red;
`;

const BlankDiv = styled.div`
background-color: rgba(100,100,100,0.5);
height: 170px;
`;

const ContactHeader = () => {
  return (
    <Contact>
        <BlankDiv><br/></BlankDiv>
      <ContactTitle>STAGE 3</ContactTitle>
    </Contact>
  );
};

export default ContactHeader;
