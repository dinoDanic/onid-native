import React from "react";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Spacer from "../spacer/spacer.component";
import { Button } from "react-native-paper";

const ButtonUi = ({ children, mode, ...otherProps }) => {
  return <MyButton {...otherProps}>{children}</MyButton>;
};

const MyButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[2]};
  color: white;
  margin-bottom: ${(props) => props.theme.space[2]};
  border-radius: 20px;
`;
export default ButtonUi;
