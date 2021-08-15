import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

import Input from "../../../components/ui/input/input.component";
import Box from "../../../components/ui/box/box.component";
import Spacer from "../../../components/ui/spacer/spacer.component";

const Login = () => {
  return (
    <Container>
      <Header>
        <LogoText>onid</LogoText>
        <LogoBellowText>task manager</LogoBellowText>
      </Header>
      <Spacer position="top" size="xxl" />
      <Middle>
        <Box>
          {/* <Text>Login</Text> */}
          <Input placeholder="email" />
          <Spacer position="bottom" size="medium" />
          <Input placeholder="password" />
        </Box>
      </Middle>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 32px;
`;

const LogoText = styled.Text`
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes["h2"]};
  color: ${(props) => props.theme.colors.ui.primary2};
  text-align: center;
`;
const LogoBellowText = styled.Text`
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes["title"]};
  color: ${(props) => props.theme.colors.ui.primary2};
  text-align: center;
`;

const Header = styled.View``;

const Middle = styled.View`
  width: 100%;
`;

export default Login;
