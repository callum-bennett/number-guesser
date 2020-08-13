import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Color from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The game is over</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            //source={{uri: "https://cdn.pixabay.com/photo/2019/01/22/18/30/summit-3948706_960_720.jpg"}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess
            the number <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>

        <MainButton onPress={props.onNewGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  highlight: {
    color: Color.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginVertical: Dimensions.get("window").height / 60,
    marginHorizontal: 30,
  },
  resultText: {
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
    textAlign: "center",
  },
});

export default GameOverScreen;
