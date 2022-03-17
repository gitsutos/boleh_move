import { Button, Image, Skeleton, Spinner } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import * as Location from "expo-location";
//REMOVE import * as Permissions from "expo-permissions";

const Map = () => {
  const [pikedLocation, setPikedLocation] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  let [MAP, setMAP] = useState(false);

  useEffect(() => {
    getLocationHandler();
  }, []);

  const getLocationPermission = async () => {
    const result = await Location.getForegroundPermissionsAsync();
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permission",
        "You needed to grant location permissions to use this app",
        [{ text: "Okay" }]
      );
      console.log("err");
      return false;
    }
    return true;
  };
  const getLocationHandler = async () => {
    setIsFetching(false);
    const havePermission = await getLocationPermission();
    if (!havePermission) {
      return;
    }
    try {
      const location = await Location.getCurrentPositionAsync();
      setPikedLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setMAP(false);
    } catch (err) {
      console.log(err);
      Alert.alert("Could not fetch location!", "Please try again later", [
        { text: "Okay" },
      ]);
    }
  };
  return (
    <View style={css.map}>
      <MapView
        region={{
          ...pikedLocation,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Marker coordinate={pikedLocation} />
      </MapView>
    </View>
  );
};

const css = StyleSheet.create({
  map: {
    height: "82%",
    width: "95%",
  },
});

export default Map;
