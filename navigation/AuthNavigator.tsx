import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";

import LogIn from "../screens/user/LogIn";
import SignUp from "../screens/user/SignUp";
import Starting from "../screens/Starting";
import NewNeeded from "../screens/user/NewNeeded";
import NewRider from "../screens/user/NewRider";

import { auth, dbRef } from "../firebase";
import userReducer from "../store/reducer/users";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = ({ navigation }) => {
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        navigation.replace("HomeNavigation");
      }
    });
    return unSubscribe;
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
      <AuthStack.Screen
        options={{
          headerTitle: "REGISTER AS A PASSENGER",
          headerBackTitle: "Go Back",
        }}
        name="NewNeeded"
        component={NewNeeded}
      />
      <AuthStack.Screen
        options={{
          headerTitle: "REGISTER AS A RIDER/VOLUNTEER",
          headerBackTitle: "Go Back",
        }}
        name="NewRider"
        component={NewRider}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
