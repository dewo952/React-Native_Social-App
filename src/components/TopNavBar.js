import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import log2 from "../../assets/log2.png";
import { logo2, icons1 } from "../styles/CommonCss/pagecss";
import { Ionicons } from "@expo/vector-icons";

const TopNavBar = ({ navigation, page }) => {
  return (
    <View style={styles.container}>
      
      {page === "Mainpage" && (
        <Ionicons
          name="chatbubbles"
          size={24}
          color="white"
          style={icons1}
          onPress={() => navigation.navigate("Chats")}
        />
      )}
      {page === "UserProfile" && (
        <Ionicons
          name="settings"
          size={24}
          color="white"
          style={icons1}
          onPress={() => navigation.navigate("Setting")}
        />
      )}
    </View>
  );
};

export default TopNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    position: "absolute",
    top: 0,
    zIndex: 100,
    backgroundColor: "#111111",
  },
});
