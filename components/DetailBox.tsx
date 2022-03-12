import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DetailBox = () => {
  return (
    <View style={css.detailBox}>
      <View style={css.detail}>
        <Text style={css.headingText}>Name :</Text>
        <Text style={css.detailsText}>Ali bin Abu</Text>
      </View>
      <View style={css.detail}>
        <Text style={css.headingText}>Contact NO :</Text>
        <Text style={css.detailsText}>0770 9090 89</Text>
      </View>
      <View style={css.detail}>
        <Text style={css.headingText}>Vehicle :</Text>
        <Text style={css.detailsText}>Myvi JUD 1234</Text>
      </View>
      <View style={css.detail}>
        <Text style={css.headingText}>Organization :</Text>
        <Text style={css.detailsText}>NCBM</Text>
      </View>
    </View>
  );
};
const css = StyleSheet.create({
  detailBox: {
    margin: 30,
    width: "100%",
    alignItems: "flex-start",
    backgroundColor: "rgb(200,200,200)",
    alignSelf: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    height: 250,
  },
  detail: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    flexWrap: "wrap",
  },
  headingText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  detailsText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export default DetailBox;
