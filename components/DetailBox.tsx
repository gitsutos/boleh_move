import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DetailBox = ({ volunteer }) => {
  return (
    <View style={css.detailBox}>
      <View style={css.detail}>
        <Text style={css.headingText}>Name :</Text>
        <Text style={css.detailsText}>{volunteer.volunteer_name}</Text>
      </View>
      <View style={css.detail}>
        <Text style={css.headingText}>Age :</Text>
        <Text style={css.detailsText}>{volunteer.volunteer_age}</Text>
      </View>
      <View style={css.detail}>
        <Text style={css.headingText}>Contact NO :</Text>
        <Text style={css.detailsText}>{volunteer.volunteer_mobile_no}</Text>
      </View>
      <View style={css.detail}>
        <Text style={css.headingText}>Vehicle :</Text>
        <Text style={css.detailsText}>
          {volunteer.volunteer_vehicle.register_number}
        </Text>
      </View>
      <View style={css.detail}>
        <Text style={css.headingText}>Organization :</Text>
        <Text style={css.detailsText}>{volunteer.volunteer_org}</Text>
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
    borderRadius: 20,
  },
  detail: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    flexWrap: "wrap"
  },
  headingText: {
    fontSize: 20,
    marginHorizontal: 10,
    fontFamily: "oswald",
  },
  detailsText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export default DetailBox;
