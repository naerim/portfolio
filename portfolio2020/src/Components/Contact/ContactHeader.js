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

const ContactHeader = () => {
  return (
    <Contact>
      <ContactTitle>STAGE 3</ContactTitle>
    </Contact>
  );
};

export default ContactHeader;
