import React from "react";
import styled from "styled-components/native";

const Hr = () => {
  return <Line />;
};

const Line = styled.View`
  border-width: 1px;
  height: 1px;
  border-color: rgba(0, 0, 0, 0.1);
`;
export default Hr;
