import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);

  const handleNewGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleGameOver = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {!userNumber ? (
        <StartGameScreen onStartGame={handleStartGame} />
      ) : guessRounds <= 0 ? (
        <GameScreen userChoice={userNumber} onGameOver={handleGameOver} />
      ) : (
        <GameOverScreen userNumber={userNumber} rounds={guessRounds} onNewGame={handleNewGame} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
