import React from "react";
import { Button, StyleSheet, View } from "react-native";

import BodyText from '../components/BodyText'

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The game is over</BodyText>
      <BodyText>Number of rounds: {props.rounds}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onNewGame}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
