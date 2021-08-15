import React from "react";
import Navigation from "./src/structure/navigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/structure/theme";
import { useFonts, UbuntuMono_700Bold } from "@expo-google-fonts/ubuntu-mono";

export default function App() {
  let [ubuntuLoaded] = useFonts({
    UbuntuMono_700Bold,
  });
  if (!ubuntuLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}
