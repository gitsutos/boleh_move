import React, { useState, createContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button } from "native-base";


export const userState = createContext("null");

const Starting = ({navigation}) => {
  return (
    <View style={css.parent}>
      <Image source={require("../assets/splash.gif")} style={css.logo} />
      <Button
        style={{ alignSelf: "flex-end", marginHorizontal: 30, ...css.button }}
        variant="outline"
        colorScheme="secondary"
        onPress={() => {
          navigation.navigate("LogIn");
        }}
      >
        Login
      </Button>
      <Button
        style={{
          alignSelf: "flex-start",
          marginHorizontal: 30,
          marginTop: 40,
          ...css.button,
        }}
        variant="outline"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        Sign up
      </Button>
    </View>
  );
};
const css = StyleSheet.create({
  parent: {
    backgroundColor: "#000B1B",
    height: "100%",
    width: "100%",
  },
  logo: {
    height: 400,
    width: 400,
    alignSelf: "center",
  },
  button: {
    borderRadius: 10,
    width: 150,
  },
});
export default Starting;
