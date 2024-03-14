// StartScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import BalloonGrid from "./BalloonGrid";

const StartScreen = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  // Countdown timer
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timerInterval);
          // Game over logic
          // Example: Show a message or navigate to another screen
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* <Text style={styles.scoreText}>Score: {score}</Text>
        <Text style={styles.timeText}>
          Time Left: {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </Text> */}
      </View>
      <BalloonGrid setScore={setScore} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default StartScreen;
