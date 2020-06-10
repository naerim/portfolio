import React from "react";
import styled from "styled-components";

const Contact = styled.section`
  margin: 10px 50px;
`;

const ContactDiv = styled.div`
  width: 100%;
  background-color: red;
  height: 80vh;
`;

const ContactSection = () => {
  return (
    <Contact>
      <ContactDiv>내용</ContactDiv>
    </Contact>
  );
};

export default ContactSection;
