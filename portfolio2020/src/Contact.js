import React from "react";
import styled from "styled-components";
import ContactHeader from "./Components/Contact/ContactHeader";
import ContactSection from "./Components/Contact/ContactSection";

const ContactDiv = styled.div`
height: 100vh;
`;

const Contact = () => {
  return (
    <ContactDiv>
      <ContactHeader />
      <ContactSection />
    </ContactDiv>
  );
};

export default Contact;
