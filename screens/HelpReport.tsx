import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput, Button } from "native-base";
// import { useSelector } from "react-redux";

// import store, { ADD_HELP, CHANGE_PAGE } from "../store";

const HelpReport = () => {
  // const goingBack = () => {
  //   store.dispatch({
  //     type: CHANGE_PAGE,
  //     payload: {
  //       currentPage: pageState[0] + 1,
  //       lastPage: pageState[0],
  //     },
  //   });
  //   store.dispatch({
  //     type: ADD_HELP,
  //     payload: {
  //       id: helps.length + 1,
  //       starting: fromValue,
  //       ending: toValue,
  //     },
  //   });
  //   // console.log("hm :", store.getState());
  // };
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  // const pageState = useSelector((state) => [
  //   state.page.currentPage,
  //   state.page.lastPage,
  // ]);

  // const helps = useSelector((state) => state.helps);
  return <KeyboardAvoidingView behavior="padding"></KeyboardAvoidingView>;
};
const css = StyleSheet.create({
  input: {
    backgroundColor: "rgb(200,200,200)",
    height: 35,
    fontSize: 20,
  },
  label: {
    fontSize: 20,
  },
  disableneses: {
    backgroundColor: "rgb(200,200,200)",
    flexDirection: "row",
    marginVertical: 20,
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    justifyContent: "space-evenly",
  },
});
export default HelpReport;
