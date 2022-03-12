import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Box, Text } from "native-base";

import { useSelector } from "react-redux";
import DetailBox from "./DetailBox";

function randInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const DriverDetails = () => {
  return (
    <View style={css.parent}>
      <Box
        style={{
          flexWrap: "wrap",
          margin: 15,
          borderRadius: 20,
          backgroundColor: "#874646",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#000",
          borderWidth: 5,
          height: 40,
        }}
      >
        <Text style={{ fontSize: 24, color: "white" }}>
          All set ! Your rider is on the way
        </Text>
      </Box>
      <DetailBox />
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
