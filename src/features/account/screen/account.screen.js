import React from "react";
import { View, Text, Pressable } from "react-native";
import { auth } from "../../../firebase/firebase.utils";

const AccountScreen = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <Pressable onPress={() => auth.signOut()}>
        <Text>logout</Text>
      </Pressable>
    </View>
  );
};

export default AccountScreen;
