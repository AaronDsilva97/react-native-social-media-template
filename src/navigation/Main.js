import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Profile from "../screens/Profile";
import { useSelector } from "react-redux";
const Stack = createStackNavigator();

const Main = () => {
  const { color } = useSelector((state) => state.theme);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.surface,
          elevation: 12,
        },
        headerTitleStyle: {
          color: color.on_surface,
        },
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Main;
