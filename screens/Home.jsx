import React, { useCallback, useEffect } from "react";
import { Alert, StyleSheet, View, Linking } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Button } from "native-base";

function OpenURLButton({ url, children, color }) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Button color={color} onPress={handlePress}>
      {children}
    </Button>
  );
}

const Home = () => {  
  return (
    <View style={css.parent}>
    <StatusBar style="dark" />
      <View style={css.container}>
        <View style={css.buttons}>
          <Button onPress={() => {}} color="rgb(250,0,190)">
            NEED HELP
          </Button>
        </View>
        <View style={css.buttons}>
          <OpenURLButton
            url="https://mysprsemak.spr.gov.my/semakan/daftarPemilih"
            color="rgb(250,50,80)"
          >
            MY STATION
          </OpenURLButton>
        </View>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },
  parent: {
    display: "flex",
    alignItems: "center",
  },
  buttons: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    marginHorizontal: 25,
    borderRadius: 10,
    shadowOpacity: 0.2,
    elevation: 9,
  },
});

export default Home;
