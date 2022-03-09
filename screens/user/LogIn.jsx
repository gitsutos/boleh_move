import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Button, Text, FormControl, Input, VStack, HStack } from "native-base";

import validator from "validator";
import { LOGIN, SIGN_UP_GOOGLE } from "../../store/actions/users-action";
import { auth } from "../../firebase";
import Icon from "react-native-vector-icons/FontAwesome";

import { useDispatch, useSelector } from "react-redux";
import { AlertBox } from "../../components/reusable";

const input_props = {
  backgroundColor: "coolGray.300",
  variant: "outline",
  color: "blue.900",
};

const LogIn = ({ navigation }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState([false, ""]);
  useEffect(() => {
    if (!validator.isEmail(emailAddress) && emailAddress) {
      setError([true, "please enter an valid email"]);
    } else if (!(password && emailAddress)) {
      setError([true, "please fill all of the below given fields"]);
    } else {
      setError([false, ""]);
    }
  }, [emailAddress, password]);

  const dispatch = useDispatch();
  const auth_error = useSelector((state) => state.error.auth);
  const handleLogin = async () => {
    setLoading(true);
    await dispatch(LOGIN(emailAddress, password));
    setLoading(false);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={css.container}
    >
      <VStack w={"90%"}>
        {error[0] && error[1] ? (
          <AlertBox status="error">{error[1]}</AlertBox>
        ) : null}
        {auth_error[0] && auth_error[1] ? (
          <AlertBox status="warning">{auth_error[1]}</AlertBox>
        ) : null}
        <FormControl isRequired style={css.input}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            type="email"
            keyboardType="email-address"
            placeholder="Email"
            value={emailAddress}
            onChangeText={setEmailAddress}
            {...input_props}
          ></Input>
        </FormControl>
        <FormControl isRequired style={css.input}>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            keyboardType="visible-password"
            placeholder="password"
            {...input_props}
            type="password"
            value={password}
            onChangeText={setPassword}
          ></Input>
        </FormControl>
        <Button
          disabled={!error[0] ? false : true}
          size="lg"
          colorScheme="primary"
          isLoading={Loading}
          variant={"subtle"}
          onPress={handleLogin}
        >
          Register
        </Button>
      </VStack>
      <HStack alignItems="center">
        <Text>don't have an account ?</Text>
        <Button
          onPress={() => {
            navigation.replace("SignUp");
          }}
          isLoading={Loading}
          variant={"link"}
        >
          create one
        </Button>
      </HStack>
      <Button
        onPress={() => {
          setLoading(true);
          dispatch(SIGN_UP_GOOGLE());
          setLoading(false);
        }}
        isLoading={Loading}
        leftIcon={<Icon name="google" color="white" size={20} />}
      >
        SignIn with google
      </Button>
    </KeyboardAvoidingView>
  );
};
const css = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    paddingBottom: 25,
  },
  contentContainer: {
    height: "100%",
    width: "100%",
  },
});

export default LogIn;
