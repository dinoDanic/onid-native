import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import { auth, registerUserFb } from "../../../firebase/firebase.utils";
import { setCurrentUser } from "../../../redux/user/user.action";

import Input from "../../../components/ui/input/input.component";
import Box from "../../../components/ui/box/box.component";
import Spacer from "../../../components/ui/spacer/spacer.component";
import Title from "../../../components/ui/title/title.component";
import { ButtonUi } from "../../../components/ui/button/button-ui.component";

const Register = ({ setRegisterShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const dispatch = useDispatch();

  const register = async () => {
    if (password !== repeatPassword) {
      setErrorMessage("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(userName);
      setShowLoading(true);
      await registerUserFb(user, userName);
      setShowLoading(false);
      dispatch(setCurrentUser(user));
    } catch (err) {
      console.log(err.message);
      setErrorMessage(err.message);
    }
  };

  return (
    <Container>
      <Spacer position="top" size="xl" />
      <Middle>
        <Box>
          <Title>Register</Title>
          <Spacer position="top" size="medium" />
          <Input
            placeholder="email"
            autoCapitalize="none"
            textContentType="emailAddress"
            onChangeText={(u) => setEmail(u)}
          />
          <Spacer position="top" size="medium" />
          <Input
            autoCapitalize="none"
            placeholder="user name"
            onChangeText={(u) => setUserName(u)}
          />
          <Spacer position="bottom" size="medium" />
          <Input
            placeholder="password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(u) => setPassword(u)}
          />
          <Spacer position="bottom" size="medium" />
          <Input
            placeholder="repeat password"
            secureTextEntry
            autoCapitalize="none"
            value={repeatPassword}
            textContentType="password"
            onChangeText={(u) => setRepeatPassword(u)}
          />
          <Text>{errorMessage}</Text>
          <Buttons>
            <ButtonUi
              variant="body"
              mode="contained"
              onPress={() => register()}
            >
              Register
            </ButtonUi>
          </Buttons>
        </Box>
        <ButtonUi
          mode="text"
          color="black"
          onPress={() => setRegisterShow(false)}
        >
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

export default Register;
