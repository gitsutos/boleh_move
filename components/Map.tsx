import { Button, Image, Skeleton, Spinner } from "native-base";
import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import * as Location from "expo-location";
//REMOVE import * as Permissions from "expo-permissions";

const Map = () => {
  const [pikedLocation, setPikedLocation] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
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
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      console.log(location);
    } catch (err) {
      console.log(err);
      Alert.alert("Could not fetch location!", "Please try again later", [
        { text: "Okay" },
      ]);
    }
  };
  let mapUrl;
  if (pikedLocation) {
    console.log("piked");
    mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyC9U31c4n3LRC0dCZSHBmujUaoU5hlTRI0`;
  }

  return (
    <View style={css.map}>
      {pikedLocation ? (
        <Image
          source={{
            uri: mapUrl,
          }}
          alt="load"
          style={{ alignSelf: "center", height: 300, width: 300 }}
        />
      ) : (
        <Button variant={"ghost"} onPress={getLocationHandler}>
          get location
        </Button>
      )}
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
