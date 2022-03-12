import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Input, Button, FormControl, Center } from "native-base";

const HelpReport = ({ navigation }) => {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding">
      <Center style={css.container}>
        <FormControl style={css.input} isRequired>
          <FormControl.Label>From</FormControl.Label>
          <Input
            variant={"rounded"}
            keyboardAppearance="dark"
            style={css.input}
            onChangeText={setFromValue}
            value={fromValue}
            bgColor="rgb(255,255,255)"
            placeholder="starting place"
          />
        </FormControl>
        <FormControl style={css.input} isRequired>
          <FormControl.Label>To</FormControl.Label>
          <Input
            value={toValue}
            onChangeText={setToValue}
            bgColor="rgb(255,255,255)"
            variant={"rounded"}
            keyboardAppearance="dark"
            placeholder="ending place"
          />
        </FormControl>
        <Button
          onPress={() => {
            navigation.navigate("DriverDetailsNavigation");
          }}
          margin={20}
          colorScheme="success"
          w={100}
        >
          SUBMIT
        </Button>
      </Center>
    </KeyboardAvoidingView>
  );
};
const css = StyleSheet.create({
  input: {
    marginVertical: 40,
    height: 35,
    borderRadius: 10,
    fontSize: 20,
  },
  container: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },
  label: {
    fontSize: 20,
  },
});
export default HelpReport;
