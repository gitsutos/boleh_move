import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "../firebase";
import React, { useState, useEffect } from "react";

import LogIn from "../screens/user/LogIn";
import SignUp from "../screens/user/SignUp";
import Starting from "../screens/Starting";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("HomeNavigation");
      }
    });
    return unsubscribe;
  }, []);
  return (
    <AuthStack.Navigator initialRouteName="Starting">
      <AuthStack.Screen
        name="Starting"
        options={{ headerShown: false }}
        component={Starting}
      />
      <AuthStack.Screen name="LogIn" component={LogIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
