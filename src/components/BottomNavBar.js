import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { icon1 } from "../components/CommonCss/pagecss";

const BottomNavBar = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="home-variant"
        size={24}
        color="white"
        style={icon1}
      />
      <Fontisto name="search" size={24} color="black" style={icon1} />
      <Ionicons name="ios-heart" size={24} color="black" style={icon1} />
      <FontAwesome name="user-circle" size={24} color="black" style={icon1} />
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#111111",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 100,
    borderTopWidth: 1,
    paddingVertical: 10,
  },
});
