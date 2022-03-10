import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const BaseInput = ({
  label,
  placeholder,
  keyboardType,
  onChangeText,
  value
}) => {
  return (
    <View style={css.base_input}>
      <Text style={css.label}>{label}</Text>
      <TextInput
        style={css.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        editable
        multiline={true}
        maxLength={40}
      ></TextInput>
    </View>
  );
};

const css = StyleSheet.create({
  base_input: {
    margin: 20,
  },
  input: {
    backgroundColor: "rgb(200,200,200)",
    height: 70,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 20,
  },
  label: {
    fontSize: 20,
  },
});

export default BaseInput;
