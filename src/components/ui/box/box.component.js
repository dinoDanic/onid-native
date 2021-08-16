import React from "react";
import styled from "styled-components/native";

const Box = ({ children, ...otherPorps }) => {
  return <Container {...otherPorps}>{children}</Container>;
};

const Container = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
  border-radius: 16px;
  width: 100%;
`;

export default Box;
