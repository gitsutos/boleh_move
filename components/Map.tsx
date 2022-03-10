import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Map = () => {
  return (
    <View style={css.map}>
      <Image
        source={require("../assets/photos/gmaps.png")}
        style={{ height: "100%", width: "100%", position: "absolute" }}
        resizeMode="cover"
      />
    </View>
  );
};

const css = StyleSheet.create({
  map: {
    height: "75%",
    width: "95%",
  },
});

export default Map;
