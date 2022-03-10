import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "native-base";

import { useSelector } from "react-redux";
import DetailBox from "./DetailBox";

function randInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const DriverDetails = () => {
  const volunteers = useSelector((state) => state.user);
  //   console.log(volunteers.length);
  let randChoice = randInteger(0, volunteers.length - 1);
  randChoice = volunteers[randChoice];
  //   console.log(randChoice.volunteer_name[1]);

  return (
    <View style={css.parent}>
      <Avatar size={80} source={require("../assets/photos/dp_sample.png")} />
      <DetailBox volunteer={randChoice} />
    </View>
  );
};
const css = StyleSheet.create({
  parent: {
    margin: 20,
    alignItems: "center",
  },
});
export default DriverDetails;
