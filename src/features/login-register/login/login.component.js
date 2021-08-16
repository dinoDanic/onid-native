import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import Input from "../../../components/ui/input/input.component";
import Box from "../../../components/ui/box/box.component";
import Spacer from "../../../components/ui/spacer/spacer.component";
import Title from "../../../components/ui/title/title.component";
import { ButtonUi } from "../../../components/ui/button/button-ui.component";

import { loginWithEmailAndPassword } from "../../../firebase/firebase.utils";

const Login = ({ setLoginShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <Spacer position="top" size="xl" />
      <Middle>
        <Box>
          <Title>Login</Title>
          <Spacer position="top" size="medium" />
          <Input
            placeholder="email"
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <Spacer position="bottom" size="medium" />
          <Input
            placeholder="password"
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />

          <Buttons>
            <ButtonUi
              variant="body"
              mode="contained"
              onPress={() => loginWithEmailAndPassword(email, password)}
            >
              Login
            </ButtonUi>
          </Buttons>
        </Box>
        <ButtonUi mode="text" color="black" onPress={() => setLoginShow(false)}>
          close
        </ButtonUi>
      </Middle>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 30px;
`;

const Middle = styled.View`
  width: 100%;
`;

const Buttons = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;

export default Login;
