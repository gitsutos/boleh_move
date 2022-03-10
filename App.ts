import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import PlacesNavigator from "./navigation/PlacesNavigator"; 


export default function App() {
  return <NativeBaseProvider>
    <PlacesNavigator />
  </NativeBaseProvider>;
}
