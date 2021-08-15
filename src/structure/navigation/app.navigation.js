import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import SpaceScreen from "../../features/space/screen/space.screen";
import MyTasksScreen from "../../features/my-tasks/screen/my-tasks.screen";
import FavoritesScreen from "../../features/favorites/screen/favorites.screen";
import AccountScreeen from "../../features/account/screen/account.screen";

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  const TAB_ICON = {
    Space: "inbox",
    MyTasks: "check-square-o",
    Favorites: "star-o",
    Account: "user-o",
  };
  const screenOptions = ({ route }) => {
    return {
      headerShown: false,
      tabBarIcon: ({ color }) => (
        <FontAwesome name={TAB_ICON[route.name]} size={24} color={color} />
      ),
    };
  };
  const tabBarOptions = {
    activeTintColor: "tomato",
    inactiveTintColor: "gray",
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}
      >
        <Tab.Screen name="Space" component={SpaceScreen} />
        <Tab.Screen name="MyTasks" component={MyTasksScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Account" component={AccountScreeen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
