import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

import Login from "./login/login.component";

const Register = () => {
  return (
    <>
      <BackgroundColor />
      <RocketImage source={require("../../img/rocket.png")} />
      <SafeAreaView style={{ flex: 1 }}>
        <Login />
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

export default Register;
