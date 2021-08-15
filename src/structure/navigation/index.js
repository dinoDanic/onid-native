import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import AppNavigation from "./app.navigation";

import Register from "../../features/login-register/login-register.component";

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return <>{currentUser ? <AppNavigation /> : <Register />}</>;
};

export default Navigation;
