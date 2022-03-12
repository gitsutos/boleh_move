import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import {
  Button,
  FormControl,
  Input,
  Stack,
  Text,
  HStack,
  VStack,
  ScrollView,
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome";
import validator from "validator";
import { SIGN_UP, SIGN_UP_GOOGLE } from "../../store/actions/users.actions";

import { auth } from "../../firebase";

import { AlertBox } from "../../components/reusable";
import { useDispatch, useSelector } from "react-redux";
import PopOver from "../../components/PopOver";

const input_props = {
  backgroundColor: "coolGray.300",
  variant: "outline",
  color: "blue.900",
};

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth_error = useSelector((state) => state.error.auth);

  // start State variables
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState([false, ""]);
  const [popUpOpen, setPopUpOpen] = useState(false);
  // end

  useEffect(() => {
    if (!validator.isEmail(emailAddress) && emailAddress) {
      setError([true, "please enter an valid email"]);
    } else if (password !== rePassword && rePassword) {
      setError([true, "passwords aren't same"]);
    } else if (!(password && rePassword && username && emailAddress)) {
      setError([true, "please fill all of the below given fields"]);
    } else {
      setError([false, ""]);
    }
  }, [emailAddress, password, rePassword]);

  const handleSIgnUp = async () => {
    setLoading(true);
    await dispatch(SIGN_UP(emailAddress, password, username));
    setLoading(false);
    setPopUpOpen(true);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // navigation.replace("");
        setPopUpOpen(true);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={css.container}
      >
        <Stack
          direction="column"
          width={"90%"}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PopOver
            navigation={navigation}
            isOpen={popUpOpen}
            onClose={() => setPopUpOpen(false)}
          />
          <VStack>
            {error[0] && error[1] ? (
              <AlertBox status="error">{error[1]}</AlertBox>
            ) : null}
            {auth_error[0] && auth_error[1] ? (
              <AlertBox status="warning">{auth_error[1]}</AlertBox>
            ) : null}
          </VStack>
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
            <FormControl.Label>Username</FormControl.Label>
            <Input
              value={username}
              onChangeText={setUsername}
              keyboardType="name-phone-pad"
              placeholder="Username"
              {...input_props}
            ></Input>
          </FormControl>
          <FormControl isRequired style={css.input}>
            <FormControl.Label>Password</FormControl.Label>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={css.passwordInput}
              onChangeText={setPassword}
              value={password}
            />
          </FormControl>
          <FormControl isRequired style={css.input}>
            <FormControl.Label>Type password again</FormControl.Label>
            <TextInput
              placeholder="again Password"
              secureTextEntry={true}
              style={css.passwordInput}
              onChangeText={setRePassword}
              value={rePassword}
            />
          </FormControl>
          <HStack w={"100%"} style={{ justifyContent: "space-evenly" }}>
            <Button
              disabled={!error[0] ? false : true}
              size="lg"
              isLoading={Loading}
              colorScheme="success"
              variant="outline"
              onPress={handleSIgnUp}
            >
              Register
            </Button>
            <Button
              onPress={() => {
                navigation.pop();
              }}
              size="lg"
              colorScheme="error"
              variant={"subtle"}
            >
              Cancel
            </Button>
          </HStack>
          <HStack alignItems="center">
            <Text>already have an account ?</Text>
            <Button
              isLoading={Loading}
              onPress={() => {
                navigation.replace("LogIn");
              }}
              variant={"link"}
            >
              Login
            </Button>
          </HStack>
          <Button
            onPress={() => {
              dispatch(SIGN_UP_GOOGLE());
            }}
            leftIcon={<Icon name="google" color="white" size={20} />}
          >
            SignIn with google
          </Button>
        </Stack>
      </KeyboardAvoidingView>
    </ScrollView>
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
  passwordInput: {
    color: "black",
    backgroundColor: "#9995",
    height: 40,
    borderRadius: 3,
    padding: 5,
    paddingBottom: 10,
  },
  contentContainer: {
    height: "100%",
    width: "100%",
  },
});

export default SignUp;
