import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Entypo";
import Home from "../screens/Home";
import HelpReport from "../screens/HelpReport";

import Profile from "../screens/Profile";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const HomeNavigator = ({ navigation }) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigation.replace("AuthNavigation");
      }
    });
  }, []);
  let userName = useSelector((state) => state.user.displayName);
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Icon
                color={focused ? "#006CA9" : color}
                name="home"
                size={size}
              />
            );
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="slideshare"
              color={focused ? "#006CA9" : color}
              size={size}
            />
          ),
          title: "Need Help",
        }}
        component={HelpReport}
        name="HelpReport"
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="user" color={focused ? "#006CA9" : color} size={size} />
          ),
          title: "Profile",
          headerTitle: userName,
          headerBlurEffect: "light",
        }}
        component={Profile}
        name="Profile"
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
