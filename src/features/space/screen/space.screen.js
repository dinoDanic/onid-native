import React from "react";
import { useSelector } from "react-redux";
import { Text, SafeAreaView } from "react-native";
import styled from "styled-components/native";

const SpaceScreen = () => {
  const state = useSelector((state) => state.space.value);
  return (
    <SafeAreaView>
      <Container>
        <Text>Content</Text>
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  padding: 16px;
`;

export default SpaceScreen;
