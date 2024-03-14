import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Balloon = ({ positionX, positionY, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.balloonContainer, { left: positionX, bottom: positionY }]}
      onPress={onPress}
    >
      <View style={styles.balloon}>
        <View style={styles.balloonTail} />
        <Text style={styles.balloonText}></Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  balloonContainer: {
    position: "absolute",
    alignItems: "center",
  },
  balloon: {
    width: 50,
    height: 50,
    backgroundColor: "red", // Light Coral color
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#CD5C5C", // Indian Red color
  },
  balloonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  balloonTail: {
    position: "absolute",
    bottom: -15,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "blue", // Light Coral color
  },
});

export default Balloon;


