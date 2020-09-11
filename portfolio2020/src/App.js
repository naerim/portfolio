import React from "react";
import Main from "./pages/main";
import styled from "styled-components";

function App() {
  return (
      <AppContainer>
        <Main />
      </AppContainer>
  );
}

const AppContainer = styled.div`
  margin: 0;
  padding: 0 20;
  overflow-x: hidden;
  background: #204a75;
`;

export default App;
