import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    alignItems: "center",
    height: 90,
    justifyContent: "center",
    paddingTop: 36,
    width: "100%",
  },
  headerIOS: {
    backgroundColor: "#FFF",
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    color: "black",
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default Header;
