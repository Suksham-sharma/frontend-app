import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { LandingText } from "./component/landingText";

import { GestureHandlerRootView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const WelcomeScreen = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require("./assets/home.jpeg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.container}>
            <LinearGradient
              colors={[
                "transparent",
                "rgba(255,255,255,1)",
                "rgba(255,255,255,1)",
              ]}
              style={styles.gradient}
            >
              <LandingText />
            </LinearGradient>
          </View>
        </GestureHandlerRootView>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 500,
  },
});
