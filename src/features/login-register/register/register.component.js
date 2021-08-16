import React, { useEffect } from "react";
import styled from "styled-components/native";

import Input from "../../../components/ui/input/input.component";
import Box from "../../../components/ui/box/box.component";
import Spacer from "../../../components/ui/spacer/spacer.component";
import Title from "../../../components/ui/title/title.component";
import { ButtonUi } from "../../../components/ui/button/button-ui.component";

const Register = ({ setRegisterShow }) => {
  return (
    <Container>
      <Spacer position="top" size="xl" />
      <Middle>
        <Box>
          <Title>Register</Title>
          <Spacer position="top" size="medium" />
          <Input placeholder="email" />
          <Spacer position="bottom" size="medium" />
          <Input placeholder="password" />
          <Buttons>
            <ButtonUi variant="body" mode="contained">
              Login
            </ButtonUi>
            <ButtonUi variant="body" mode="contained">
              Login with Google
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
