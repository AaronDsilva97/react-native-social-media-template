import React from "react";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Profile from "../screens/Profile";
import Explore from "../screens/Explore";
import Share from "../screens/Share";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-variant" : "home-variant-outline";
          } else if (route.name === "Details") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "account-circle" : "account-circle-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "magnify" : "magnify-plus";
          } else if (route.name === "Share") {
            iconName = focused ? "plus-circle" : "plus-circle-outline";
          }

          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Share" component={Share} />
      <Tab.Screen name="Details" component={Detail} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
