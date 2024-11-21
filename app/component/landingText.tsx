import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInRight } from "react-native-reanimated";
import { Link } from "expo-router";

const { height } = Dimensions.get("window");

export const LandingText = () => {
  return (
    <LinearGradient
      colors={[
        "transparent",
        "rgba(255, 255, 255, 0.9)",
        "rgba(255, 255, 255, 1)",
      ]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Animated.Text
              style={styles.findText}
              entering={FadeInRight.delay(300).duration(500)}
            >
              Find your <Text style={styles.highlightText}>perfect</Text>
            </Animated.Text>
            <Text style={styles.matchText}>connections.</Text>
          </View>

          <Text style={styles.subtitleText}>
            Join our community and connect with amazing people worldwide
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.getStartedButton}>
              <Link href={"/signup"}>
                <Text style={styles.getStartedText}>Get started</Text>
              </Link>
            </TouchableOpacity>

            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialButtonText}>Apple</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Already have an account? </Text>
            <TouchableOpacity>
              <Link href={"/signin"}>
                <Text style={styles.signInButton}>Sign in</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.7,
  },
  container: {
    justifyContent: "flex-end",
    height: "100%",
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 16,
  },
  findText: {
    fontSize: 32,
    fontWeight: "600",
    color: "#1a1a1a",
    lineHeight: 40,
  },
  highlightText: {
    color: "#ff4757",
  },
  matchText: {
    fontSize: 32,
    fontWeight: "600",
    color: "#1a1a1a",
    lineHeight: 40,
  },
  subtitleText: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 40,
    lineHeight: 24,
  },
  buttonContainer: {
    gap: 16,
  },
  getStartedButton: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  getStartedText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  socialButtons: {
    flexDirection: "row",
    gap: 12,
  },
  socialButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e1e1e1",
  },
  socialButtonText: {
    color: "#1a1a1a",
    fontSize: 16,
    fontWeight: "500",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  signInText: {
    color: "#666666",
    fontSize: 14,
  },
  signInButton: {
    color: "#ff4757",
    fontSize: 14,
    fontWeight: "600",
  },
});
