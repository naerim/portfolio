import React from "react";
import styled from "styled-components";

// 창 최소화하면 red 영역 튀어나옴..
const ContactDiv = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  float: center;
  margin: 10px;
  border: 5px solid #ffc81e;
  background: #fde6be;
`;

const ContactTitle = styled.h3`
  margin-top: 0px;
  text-shadow: 2px 2px 0 black;
  background: #593500;
  color: white;
  padding: 10px;
`;

const ContactImg = styled.img``;

const ContactContent = styled.div``;

const ContactButton = styled.button`
  width: 70%;
  background: #ffc81e;
  border: none;
`;

const ContactData = () => {
  const Contact = [
    {
      title: "E-mail",
      image: "/",
      content: "naerim1119@gmail.com",
    },
    {
      title: "Phone",
      image: "/",
      content: "010-1234-5678",
    },
    {
      title: "Address",
      image: "/",
      content: "Ilsan, Korea",
    },
  ];
  return Contact.map(({ title, image, content }) => (
    <ContactDiv>
      <ContactTitle>{title}</ContactTitle>
      <ContactImg src={image} alt={title} />
      <ContactContent>{content}</ContactContent>
      <ContactButton>획득</ContactButton>
      <h6>클릭해서 보상을 획득하세요!</h6>
    </ContactDiv>
  ));
};

export default ContactData;
