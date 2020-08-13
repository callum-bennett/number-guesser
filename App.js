import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const handleNewGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleGameOver = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a number" />
      {!userNumber ? (
        <StartGameScreen onStartGame={handleStartGame} />
      ) : guessRounds <= 0 ? (
        <GameScreen userChoice={userNumber} onGameOver={handleGameOver} />
      ) : (
        <GameOverScreen
          userNumber={userNumber}
          rounds={guessRounds}
          onNewGame={handleNewGame}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
