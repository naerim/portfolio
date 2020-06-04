import React from "react";
import styled from "styled-components";

const Introduce = styled.div``;

const Title = styled.h1`
  color: white;
`;

const MainSection = () => {
  return (
    <section className="Contents">
      <Introduce>
        <Title>Hi! I'm Developer Kim Nae-Rim</Title>
        <h4>This is my portfolio website</h4>
      </Introduce>
    </section>
  );
};

export default MainSection;
