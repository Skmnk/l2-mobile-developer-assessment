// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions } from "react-native";
// import Balloon from "./Balloon";

// const { width, height } = Dimensions.get("window");

// const visibleXMin = 0; // Left edge of the screen
// const visibleXMax = width - 100; // Right edge of the screen minus the width of the balloon
// const visibleYMin = 0; // Top edge of the screen
// const visibleYMax = height - 100; // Bottom edge of the screen minus the height of the balloon

// const BalloonGrid = () => {
//   const [balloons, setBalloons] = useState([]);
//   const [score, setScore] = useState(0);
//   const [time, setTime] = useState(5); // 2 minutes in seconds
//   const [gameOver, setGameOver] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBalloons((prevBalloons) => {
//         const newBalloon = generateBalloon();
//         return [...prevBalloons, newBalloon];
//       });
//     }, 1500);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((prevTime) => {
//         if (prevTime > 0) {
//           return prevTime - 1;
//         } else {
//           clearInterval(timer);
//           setGameOver(true);
//           return 0;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const generateBalloon = () => {
//     const velocityY = 2; // Positive velocity for upward movement
//     return {
//       id: Math.random().toString(),
//       positionX: Math.random() * (visibleXMax - visibleXMin) + visibleXMin,
//       positionY: visibleYMin, // Start at the top of the screen
//       velocityY: velocityY,
//     };
//   };

//   const moveBalloons = () => {
//     setBalloons((prevBalloons) =>
//       prevBalloons.map((balloon) => ({
//         ...balloon,
//         positionY: balloon.positionY + balloon.velocityY,
//       }))
//     );
//   };

//   useEffect(() => {
//     const moveInterval = setInterval(moveBalloons, 100); // Adjust the interval to control the speed of movement
//     return () => clearInterval(moveInterval);
//   }, []);

//   const handlePop = (id) => {
//     setBalloons((prevBalloons) => {
//       const index = prevBalloons.findIndex((balloon) => balloon.id === id);
//       if (index !== -1) {
//         const poppedBalloon = prevBalloons[index];
//         const newBalloons = [
//           ...prevBalloons.slice(0, index),
//           ...prevBalloons.slice(index + 1),
//         ];
//         setScore((prevScore) => prevScore + 2); // Increase score by 2 for popping a balloon
//         return newBalloons;
//       }
//       return prevBalloons;
//     });
//   };

//   useEffect(() => {
//     const missedBalloons = balloons.filter(
//       (balloon) => balloon.positionY >= visibleYMax
//     );
//     if (missedBalloons.length > 0) {
//       setScore((prevScore) => prevScore - missedBalloons.length); // Penalty for missed balloons
//       setBalloons((prevBalloons) =>
//         prevBalloons.filter((balloon) => balloon.positionY < visibleYMax)
//       );
//     }
//   }, [balloons]);

//   return (
//     <View style={styles.container}>
//       {gameOver ? (
//         <Text style={styles.gameOverText}>Game Over</Text>
//       ) : (
//         <>
//           {balloons.map((balloon) => (
//             <Balloon
//               key={balloon.id}
//               positionX={balloon.positionX}
//               positionY={balloon.positionY}
//               onPress={() => handlePop(balloon.id)}
//             />
//           ))}
//           <Text style={styles.scoreText}>Score: {score}</Text>
//           <Text style={styles.timeText}>
//             Time:{" "}
//             {Math.floor(time / 60)
//               .toString()
//               .padStart(2, "0")}
//             :{(time % 60).toString().padStart(2, "0")}
//           </Text>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "lightblue",
//     width: "100%",
//     height: 700,
//   },
//   scoreText: {
//     position: "absolute",
//     top: 20,
//     left: 20,
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   timeText: {
//     position: "absolute",
//     top: 20,
//     right: 20,
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   gameOverText: {
//     fontSize: 30,
//     fontWeight: "bold",
//   },
// });

// export default BalloonGrid;

// BalloonGrid.js
// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// import Balloon from "./Balloon";

// const { width, height } = Dimensions.get("window");

// const visibleXMin = 0; // Left edge of the screen
// const visibleXMax = width - 100; // Right edge of the screen minus the width of the balloon
// const visibleYMin = 0; // Top edge of the screen
// const visibleYMax = height - 100; // Bottom edge of the screen minus the height of the balloon

// const BalloonGrid = () => {
//   const [balloons, setBalloons] = useState([]);
//   const [score, setScore] = useState(0);
//   const [time, setTime] = useState(5); // 2 minutes in seconds
//   const [gameOver, setGameOver] = useState(false);
//   const [timerInterval, setTimerInterval] = useState(null);
//   const [balloonInterval, setBalloonInterval] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBalloons((prevBalloons) => {
//         const newBalloon = generateBalloon();
//         return [...prevBalloons, newBalloon];
//       });
//     }, 1500);

//     setBalloonInterval(interval);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((prevTime) => {
//         if (prevTime > 0) {
//           return prevTime - 1;
//         } else {
//           clearInterval(timer);
//           setGameOver(true);
//           return 0;
//         }
//       });
//     }, 1000);

//     setTimerInterval(timer);

//     return () => clearInterval(timer);
//   }, []);

//   const generateBalloon = () => {
//     const velocityY = 2; // Positive velocity for upward movement
//     return {
//       id: Math.random().toString(),
//       positionX: Math.random() * (visibleXMax - visibleXMin) + visibleXMin,
//       positionY: visibleYMin, // Start at the top of the screen
//       velocityY: velocityY,
//     };
//   };

//   const moveBalloons = () => {
//     setBalloons((prevBalloons) =>
//       prevBalloons.map((balloon) => ({
//         ...balloon,
//         positionY: balloon.positionY + balloon.velocityY,
//       }))
//     );
//   };

//   useEffect(() => {
//     const moveInterval = setInterval(moveBalloons, 100); // Adjust the interval to control the speed of movement
//     return () => clearInterval(moveInterval);
//   }, []);

//   const handlePop = (id) => {
//     setBalloons((prevBalloons) => {
//       const index = prevBalloons.findIndex((balloon) => balloon.id === id);
//       if (index !== -1) {
//         const poppedBalloon = prevBalloons[index];
//         const newBalloons = [
//           ...prevBalloons.slice(0, index),
//           ...prevBalloons.slice(index + 1),
//         ];
//         setScore((prevScore) => prevScore + 2); // Increase score by 2 for popping a balloon
//         return newBalloons;
//       }
//       return prevBalloons;
//     });
//   };

//   useEffect(() => {
//     const missedBalloons = balloons.filter(
//       (balloon) => balloon.positionY >= visibleYMax
//     );
//     if (missedBalloons.length > 0) {
//       setScore((prevScore) => prevScore - missedBalloons.length); // Penalty for missed balloons
//       setBalloons((prevBalloons) =>
//         prevBalloons.filter((balloon) => balloon.positionY < visibleYMax)
//       );
//     }
//   }, [balloons]);

//   const handlePlayAgain = () => {
//     clearInterval(timerInterval);
//     clearInterval(balloonInterval);
//     setBalloons([]);
//     setScore(0);
//     setTime(5); // Reset time as needed
//     setGameOver(false);
//     // Restart timer
//     const timer = setInterval(() => {
//       setTime((prevTime) => {
//         if (prevTime > 0) {
//           return prevTime - 1;
//         } else {
//           clearInterval(timer);
//           setGameOver(true);
//           return 0;
//         }
//       });
//     }, 1000);
//     setTimerInterval(timer);
//     // Restart balloon generation
//     const interval = setInterval(() => {
//       setBalloons((prevBalloons) => {
//         const newBalloon = generateBalloon();
//         return [...prevBalloons, newBalloon];
//       });
//     }, 1500);
//     setBalloonInterval(interval);
//   };

//   return (
//     <View style={styles.container}>
//       {gameOver ? (
//         <>
//           <Text style={styles.gameOverText}>Game Over</Text>
//           <TouchableOpacity style={styles.playAgainButton} onPress={handlePlayAgain}>
//             <Text style={styles.buttonText}>Play Again</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <>
//           {balloons.map((balloon) => (
//             <Balloon
//               key={balloon.id}
//               positionX={balloon.positionX}
//               positionY={balloon.positionY}
//               onPress={() => handlePop(balloon.id)}
//             />
//           ))}
//           <Text style={styles.scoreText}>Score: {score}</Text>
//           <Text style={styles.timeText}>
//             Time:{" "}
//             {Math.floor(time / 60)
//               .toString()
//               .padStart(2, "0")}
//             :{(time % 60).toString().padStart(2, "0")}
//           </Text>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "lightblue",
//     width: "100%",
//     height: 700,
//   },
//   scoreText: {
//     position: "absolute",
//     top: 20,
//     left: 20,
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   timeText: {
//     position: "absolute",
//     top: 20,
//     right: 20,
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   gameOverText: {
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   playAgainButton: {
//     backgroundColor: "#007AFF", // Blue color
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default BalloonGrid;

// BalloonGrid.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Balloon from "./Balloon";

const { width, height } = Dimensions.get("window");

const visibleXMin = 0; // Left edge of the screen
const visibleXMax = width - 100; // Right edge of the screen minus the width of the balloon
const visibleYMin = 0; // Top edge of the screen
const visibleYMax = height - 100; // Bottom edge of the screen minus the height of the balloon

const BalloonGrid = () => {
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(120); // 2 minutes in seconds
  const [gameOver, setGameOver] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);
  const [balloonInterval, setBalloonInterval] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalloons((prevBalloons) => {
        const newBalloon = generateBalloon();
        return [...prevBalloons, newBalloon];
      });
    }, 1500);

    setBalloonInterval(interval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          setGameOver(true);
          return 0;
        }
      });
    }, 1000);

    setTimerInterval(timer);

    return () => clearInterval(timer);
  }, []);

  const generateBalloon = () => {
    const velocityY = 8; // Positive velocity for upward movement
    return {
      id: Math.random().toString(),
      positionX: Math.random() * (visibleXMax - visibleXMin) + visibleXMin,
      positionY: visibleYMin, // Start at the top of the screen
      velocityY: velocityY,
    };
  };

  const checkCollision = (newX, newY) => {
    // Iterate through existing balloons to check for collision
    for (const balloon of balloons) {
      const distance = Math.sqrt(
        Math.pow(newX - balloon.positionX, 2) +
          Math.pow(newY - balloon.positionY, 2)
      );
      if (distance < 100) {
        // Assuming the diameter of the balloon is 100
        return true; // Collision detected
      }
    }
    return false; // No collision detected
  };

  const moveBalloons = () => {
    setBalloons((prevBalloons) =>
      prevBalloons.map((balloon) => ({
        ...balloon,
        positionY: balloon.positionY + balloon.velocityY,
      }))
    );
  };

  useEffect(() => {
    const moveInterval = setInterval(moveBalloons, 100); // Adjust the interval to control the speed of movement
    return () => clearInterval(moveInterval);
  }, []);

  const handlePop = (id) => {
    if (!gameOver) {
      setBalloons((prevBalloons) => {
        const index = prevBalloons.findIndex((balloon) => balloon.id === id);
        if (index !== -1) {
          const newBalloons = [
            ...prevBalloons.slice(0, index),
            ...prevBalloons.slice(index + 1),
          ];
          setScore((prevScore) => prevScore + 2); // Increase score by 2 for popping a balloon
          return newBalloons;
        }
        return prevBalloons;
      });
    }
  };
  useEffect(() => {
    if (!gameOver) {
      const missedBalloons = balloons.filter(
        (balloon) => balloon.positionY >= visibleYMax
      );
      if (missedBalloons.length > 0) {
        setScore((prevScore) => prevScore - missedBalloons.length); // Penalty for missed balloons
        setBalloons((prevBalloons) =>
          prevBalloons.filter((balloon) => balloon.positionY < visibleYMax)
        );
      }
    }
  }, [balloons, gameOver]);
  useEffect(() => {
    if (gameOver) {
      const missedBalloons = balloons.filter(
        (balloon) => balloon.positionY >= visibleYMax
      );
      if (missedBalloons.length > 0) {
        setScore((prevScore) => prevScore - missedBalloons.length); // Penalty for missed balloons
        setBalloons((prevBalloons) =>
          prevBalloons.filter((balloon) => balloon.positionY < visibleYMax)
        );
      }
    }
  }, [gameOver]);
  const handlePress = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(popSound);
      await sound.playAsync();
    } catch (error) {
      console.log("Error playing sound: ", error);
    }
    onPress();
  };
  const handlePlayAgain = () => {
    clearInterval(timerInterval);
    clearInterval(balloonInterval);
    setBalloons([]);
    setScore(0);
    setTime(120); // Reset time as needed
    setGameOver(false);
    // Restart timer
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          setGameOver(true);
          return 0;
        }
      });
    }, 1000);
    setTimerInterval(timer);
    // Restart balloon generation
    const interval = setInterval(() => {
      setBalloons((prevBalloons) => {
        const newBalloon = generateBalloon();
        return [...prevBalloons, newBalloon];
      });
    }, 1500);
    setBalloonInterval(interval);
  };

  return (
    <View style={styles.container}>
      {gameOver ? (
        <>
          <Text style={styles.gameOverText}>Game Over</Text>
          <Text style={styles.finalScoreText}>Final Score: {score}</Text>
          <TouchableOpacity
            style={styles.playAgainButton}
            onPress={handlePlayAgain}
          >
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {balloons.map((balloon) => (
            <Balloon
              key={balloon.id}
              positionX={balloon.positionX}
              positionY={balloon.positionY}
              onPress={() => handlePop(balloon.id)}
            />
          ))}
          <Text style={styles.scoreText}>Score: {score}</Text>
          <Text style={styles.timeText}>
            Time:{" "}
            {Math.floor(time / 60)
              .toString()
              .padStart(2, "0")}
            :{(time % 60).toString().padStart(2, "0")}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    width: "100%",
    height: 700,
  },
  scoreText: {
    position: "absolute",
    top: 20,
    left: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  timeText: {
    position: "absolute",
    top: 20,
    right: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  gameOverText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  finalScoreText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  playAgainButton: {
    backgroundColor: "#007AFF", // Blue color
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

export default BalloonGrid;
