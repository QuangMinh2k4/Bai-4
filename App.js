import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  // State để lưu trữ màu nền của component cha (View)
  const [backgroundColor, setBackgroundColor] = useState("green");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Nút màu xanh lá cây (GREEN) */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={() => setBackgroundColor("green")}
      >
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "blue" }]}
        onPress={() => setBackgroundColor("blue")}
      >
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "brown" }]}
        onPress={() => setBackgroundColor("brown")}
      >
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "yellow" }]}
        onPress={() => setBackgroundColor("yellow")}
      >
        <Text style={styles.buttonText}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
        onPress={() => setBackgroundColor("red")}
      >
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "black" }]}
        onPress={() => setBackgroundColor("black")}
      >
        <Text style={styles.buttonText}>BLACK</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    padding: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});