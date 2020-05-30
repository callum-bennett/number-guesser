import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "#F7287B",
    height: 90,
    justifyContent: "center",
    paddingTop: 36,
    width: "100%",
  },
  headerTitle: {
    color: "black",
    fontSize: 18
  }
});

export default Header;
