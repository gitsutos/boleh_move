import { launchImageLibrary } from "react-native-image-picker";
import React from "react";

import { Center, IconButton } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

const ImagePicker = () => {
  async function openImageGallery() {
    const result = await launchImageLibrary({ mediaType: "photo" });
  }
  return (
    <Center>
      <IconButton
        onPress={openImageGallery}
        size={"lg"}
        variant="solid"
        icon={<Icon name="CameraFilled"></Icon>}
      />
    </Center>
  );
};

export default ImagePicker;
