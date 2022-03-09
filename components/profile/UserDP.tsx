import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";

import {
  Center,
  Avatar,
  Pressable,
  ZStack,
  IconButton,
  Box,
} from "native-base";
import { auth, storage, storageRef } from "../../firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";

const UserDP = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const selectImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      uploadImg(result.uri, "prof")
        .then(() => {
          console.log("it work");
        })
        .catch((error) => {
          console.log("it does not work");
          console.error(error);
        });
    }
  };
  const uploadImg = async (uri, imageName: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = storage.ref().child(`images/${imageName}`);
    return await ref.put(blob);
  };
  const user = useSelector((state) => state.user);
  return (
    <Box style={css.container}>
      <ZStack style={css.zOrientStack}>
        <Avatar
          size={100}
          bg="green.500"
          source={{
            uri: user.photoURL ? user.photoURL : null,
          }}
        >
          {children}
        </Avatar>
        <IconButton
          disabled={loading}
          onPress={selectImage}
          variant="ghost"
          style={css.iconButton}
          icon={<Icon style={{ color: "#0004" }} size={40} name="camera" />}
        />
      </ZStack>
    </Box>
  );
};
const css = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
  },
  iconButton: {
    marginTop: 19,
    borderRadius: 40,
  },
  zOrientStack: {
    alignItems: "center",
  },
});
export default UserDP;
