import React from "react";
import styled from "styled-components";

const MainContent = () => {
  return (
    <Container>
      <Content1>1</Content1>
      <Content2>2</Content2>
    </Container>
  );
};

const Container = styled.div`
  width: 80vw;
  margin 40px auto;
  display: flex;
  justify-content: space-between;
  height: 60vh;
`;

const Content1 = styled.div`
  display: flex;
  background: #b2c22b;
  width: 40%;
`;

const Content2 = styled.div`
  display: flex;
  background: #c27f0e;
  width: 55%;
`;

export default MainContent;
