import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";

import LogIn from "../screens/user/LogIn";
import SignUp from "../screens/user/SignUp";
import Starting from "../screens/Starting";
import NewNeeded from "../screens/user/NewNeeded";
import NewRider from "../screens/user/NewRider";

import { auth, database } from "../firebase";
import userReducer from "../store/reducer/users";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = ({ navigation }) => {
  useEffect(() => {
    const unSubscribe = () => {
      if (auth.currentUser) {
        let isRider: any, isPassenger: any;
        database
          .ref("rider/" + auth.currentUser.uid)
          .on("value", (snapshot) => {
            isRider = snapshot.exists();
          });
        database
          .ref("passenger/" + auth.currentUser.uid)
          .on("value", (snapshot) => {
            isPassenger = snapshot.exists();
          });
        if (isRider || isPassenger) {
          navigation.replace("HomeNavigation");
        }
      }
    };
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
