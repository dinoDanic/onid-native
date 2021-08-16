import styled from "styled-components/native";
import { Button } from "react-native-paper";

const defaultStyles = (theme) => `
  margin-bottom: 0;
`;

const body = (theme) => `
    background-color: ${theme.colors.ui.primary};
    padding: ${theme.space[2]};
    color: white;
    margin-bottom: ${theme.space[2]};
    border-radius: 20px;
`;

const none = (theme) => `
`;

const variants = {
  body,
  none,
};

export const ButtonUi = styled(Button)`
  ${({ theme }) => defaultStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

ButtonUi.defaultProps = {
  variant: "none",
};
