import Navigation from "./src/layout/Navigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Platform, SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "react-native";
SplashScreen.preventAutoHideAsync();

export default function App() {
  // prepare required fonts
  // useFonts: expo hook
  const [fontsLoaded] = useFonts({
    LobsterReg: require("./src/assets/fonts/Lobster-Regular.ttf"),
    RalewayReg: require("./src/assets/fonts/Raleway-Regular.ttf"),
    RalewayBold: require("./src/assets/fonts/Raleway-Bold.ttf"),
    RalewaySemiBold: require("./src/assets/fonts/Raleway-SemiBold.ttf"),
  });
  // Wait for fonts to load before applcation starts
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      Promise.resolve((resolve) => setTimeout(resolve, 5000));
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  // TODO: if logged in, render Main Layout. else render splashScreen and LoginScreen
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Navigation />
    </SafeAreaView>
  );
}
