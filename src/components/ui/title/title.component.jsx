import React from "react";
import styled from "styled-components/native";

const Title = ({ children }) => {
  return <TitleText>{children}</TitleText>;
};

const TitleText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes["title"]};
  color: ${(props) => props.theme.colors.ui["primary2"]};
  margin-bottom: ${(props) => props.theme.space[2]};
  text-align: center;
  font-family: ${(props) => props.theme.fonts.logo};
`;

export default Title;
