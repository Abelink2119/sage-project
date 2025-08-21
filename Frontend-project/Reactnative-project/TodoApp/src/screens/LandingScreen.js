import React, { useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  Animated,
  useColorScheme,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function LandingScreen({ navigation }) {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const fadeValue = useRef(new Animated.Value(0)).current;
  const colorScheme = useColorScheme();

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const isDark = colorScheme === "dark";
  const backgroundColor = isDark ? "#121212" : "#f5f5f5";
  const cardColor = isDark ? "#1e1e1e" : "#fff";

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Animated.View
        style={[
          styles.iconContainer,
          {
            transform: [{ scale: scaleValue }],
            opacity: fadeValue,
            backgroundColor: cardColor,
          },
        ]}
      >
        <Pressable onPress={() => navigation.replace("HomeScreen")}>
          <MaterialIcons name="assignment" size={110} color="#4CAF50" />
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  iconContainer: {
    padding: 35,
    borderRadius: 120,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
});
