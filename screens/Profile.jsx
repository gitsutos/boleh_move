import { VStack, Center, Box } from "native-base";
import React, { useEffect } from "react";
import { auth } from "../firebase";

import { StyleSheet, Button } from "react-native";
import { SIGN_OUT } from "../store/actions/users-action";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <Box style={css.container}>
      <Box style={{ margin: 20 }}>
        <Button
          onPress={() => dispatch(SIGN_OUT())}
          variant={"outline"}
          title="Log Out"
          color={"rgb(160,0,0)"}
        />
      </Box>
    </Box>
  );
};
let css = StyleSheet.create({
  container: {
    color: "red",
  },
});
export default Profile;
