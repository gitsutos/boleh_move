import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";

import DriverDetails from "../screens/DriverDetails";

import React, { useState } from "react";
import store from "../store";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isLogged ? "HomeNavigation" : "AuthNavigation"}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeNavigation"
            component={HomeNavigator}
          />
          <Stack.Screen
            name="AuthNavigation"
            options={{ headerShown: false }}
            component={AuthNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default PlacesNavigator;
