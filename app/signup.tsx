import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { BlurView } from "expo-blur";
import Svg, { Circle } from "react-native-svg";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

const FloatingBubbles = () => {
  const bubbles = useRef(
    [...Array(15)].map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 15 + 5,
      speed: Math.random() * 0.5 + 0.2,
    }))
  ).current;

  const [, setFrame] = useState(0);

  useEffect(() => {
    const animate = () => {
      bubbles.forEach((bubble) => {
        bubble.y -= bubble.speed;
        if (bubble.y + bubble.radius < 0) {
          bubble.y = height + bubble.radius;
          bubble.x = Math.random() * width;
        }
      });

      setFrame((prev) => prev + 1);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
      {bubbles.map((bubble, index) => (
        <Circle
          key={index}
          cx={bubble.x}
          cy={bubble.y}
          r={bubble.radius}
          fill="#FF385C"
          opacity={0.2}
        />
      ))}
    </Svg>
  );
};

export default function ModernLoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const slideAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(1)).current;

  const toggleMode = () => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: isLogin ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(fadeAnimation, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnimation, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    setIsLogin(!isLogin);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1000&q=80",
        }}
        style={StyleSheet.absoluteFillObject}
      >
        <FloatingBubbles />
        <BlurView intensity={80} style={StyleSheet.absoluteFill} tint="dark" />

        <View style={styles.contentContainer}>
          <Animated.View
            style={[
              styles.formContainer,
              {
                transform: [
                  {
                    translateY: slideAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -height * 0.1],
                    }),
                  },
                ],
                opacity: fadeAnimation,
              },
            ]}
          >
            <Text style={styles.headerText}>
              {isLogin ? "Welcome Back" : "Join the Community"}
            </Text>
            {!isLogin && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="rgba(255, 255, 255, 0.7)"
                  value={username}
                  onChangeText={setUsername}
                />
              </View>
            )}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                {isLogin ? "Log In" : "Sign Up"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleMode} style={styles.toggleButton}>
              <Text style={styles.toggleText}>
                {isLogin
                  ? "New here? Create an account"
                  : "Already have an account? Log in"}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    width: width * 0.9,
    padding: 20,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 20,
    backdropFilter: "blur(10px)",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    padding: 15,
    color: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FF385C",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  toggleButton: {
    marginTop: 20,
  },
  toggleText: {
    color: "white",
    fontSize: 16,
  },
});
