import React from "react";
import styled from "styled-components";
import ContactData from "../../Data/contactData";

const Contact = styled.section`
  margin: 10px 50px;
`;

const ContactDiv = styled.div`
  width: 100%;
  height: 60vh;
  padding: 10px;
  display: flex;
  background: red;
`;

const ContactSection = () => {
  return (
    <Contact>
      <ContactDiv>
        <ContactData />
      </ContactDiv>
    </Contact>
  );
};

export default ContactSection;
