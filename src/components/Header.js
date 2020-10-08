import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: black;
`;

const StyledH1 = styled.h1`
  font-size: 200%;
  color: white;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>React & NASA API App</StyledH1>
    </StyledHeader>
    // <div className="header">
    //   <h1 className="header-title">React & NASA API App</h1>
    // </div>
  );
}
