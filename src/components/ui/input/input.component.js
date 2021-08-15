import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Input = ({ ...otherProps }) => {
  return (
    <Container>
      <Inp {...otherProps} />
    </Container>
  );
};

const Inp = styled.TextInput`
  width: 100%;
  border-width: 1px;
  padding: 15px 10px;
  border-radius: 18px;
  border-color: rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.7);
`;

const Container = styled.View`
  width: 100%;
`;

export default Input;
