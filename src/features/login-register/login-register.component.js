import React, { useState } from "react";
import { SafeAreaView, Modal, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ButtonUi } from "../../components/ui/button/button-ui.component";

import Login from "./login/login.component";
import Register from "./register/register.component";

const LoginRegister = () => {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  return (
    <>
      <BackgroundColor />
      <RocketImage source={require("../../img/rocket.png")} />
      <SafeAreaView style={{ flex: 1 }}>
        <Header>
          <LogoText>onid</LogoText>
          <LogoBellowText>task manager</LogoBellowText>
        </Header>
        <ButtonsContainer>
          <ButtonUi
            variant="body"
            mode="contained"
            onPress={() => setLoginShow(true)}
          >
            Login
          </ButtonUi>
          <ButtonUi
            variant="body"
            mode="contained"
            onPress={() => setRegisterShow(true)}
          >
            Register
          </ButtonUi>
        </ButtonsContainer>
        <Modal animationType="slide" transparent={true} visible={loginShow}>
          <Login setLoginShow={setLoginShow} />
        </Modal>
        <Modal animationType="slide" transparent={true} visible={registerShow}>
          <Register setRegisterShow={setRegisterShow} />
        </Modal>
      </SafeAreaView>
    </>
  );
};

const RocketImage = styled.Image`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 300px;
`;

const BackgroundColor = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: linear-gradient(
    200deg,
    rgba(115, 166, 230, 0.3) 30%,
    hsla(0, 0%, 93.3%, 0)
  );
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

const Header = styled.View`
  margin-top: ${(props) => props.theme.space[4]};
`;

const ButtonsContainer = styled.View`
  padding: 30px;
`;

export default LoginRegister;
