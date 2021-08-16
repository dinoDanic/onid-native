import React, { useState } from "react";
import { getFontScale } from "react-native/Libraries/Utilities/PixelRatio";
import styled from "styled-components/native";

const Input = ({ ...otherProps }) => {
  const [focus, setFocus] = useState(false);
  return (
    <Container>
      <Inp
        {...otherProps}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{ borderColor: focus ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.1)" }}
      />
    </Container>
  );
};

const Inp = styled.TextInput`
  width: 100%;
  border-width: 1px;
  padding: 15px 10px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Container = styled.View`
  width: 100%;
`;

export default Input;
