import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./StartScreen";

// Define the updateScore function
const updateScore = (points) => {
  // Implement your logic to update the score here
  console.log("Score updated by", points);
};

// Define the HomeScreen component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>PoP The balloon!!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Start", { updateScore })}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 1500); // Hide splash after 1.5 seconds

    return () => clearTimeout(timer); 
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {isSplashVisible ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Start" component={StartScreen} />
          </>
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/splash.gif")} 
        style={styles.image}
      />
    </View>
  );
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200, 
    height: 200, 
  },
  button: {
    backgroundColor: "#007AFF", 
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
