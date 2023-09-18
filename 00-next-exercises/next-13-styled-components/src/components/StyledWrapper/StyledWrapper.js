"use client";
import React from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  width: 100%;
  max-width: 800px;
  padding: 16px 24px;
  margin: 0 auto;
  border: 1px solid hsl(0deg 0% 50% / 0.3);
  border-radius: 2px;
  background: white;
`;

function StyledWrapper({ children }) {
  return <MainWrapper>{children}</MainWrapper>;
}

export default StyledWrapper;
