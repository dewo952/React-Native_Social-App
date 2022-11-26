import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { icon1 } from "../styles/CommonCss/pagecss";

const Bottomnavbar = ({ navigation, page }) => {
  // console.log(page)
  return (
    <View style={styles.container}>
      {page === "Mainpage" ? (
        <MaterialCommunityIcons
          name="home-variant"
          size={24}
          color="black"
          style={styles.activeicon1}
          onPress={() => navigation.navigate("Mainpage")}
        />
      ) : (
        <MaterialCommunityIcons
          name="home-variant"
          size={24}
          color="black"
          style={icon1}
          onPress={() => navigation.navigate("Mainpage")}
        />
      )}

      {page === "SearchUser" ? (
        <Fontisto
          name="search"
          size={24}
          color="black"
          style={styles.activeicon1}
          onPress={() => navigation.navigate("SearchUser")}
        />
      ) : (
        <Fontisto
          name="search"
          size={24}
          color="black"
          style={icon1}
          onPress={() => navigation.navigate("SearchUser")}
        />
      )}
      {page === "Notification" ? (
        <Ionicons
          name="ios-heart"
          size={24}
          color="black"
          style={styles.activeicon1}
          onPress={() => navigation.navigate("Notification")}
        />
      ) : (
        <Ionicons
          name="ios-heart"
          size={24}
          color="black"
          style={icon1}
          onPress={() => navigation.navigate("Notification")}
        />
      )}
      {page === "UserProfile" ? (
        <FontAwesome
          name="user"
          size={24}
          color="black"
          style={styles.activeicon1}
          onPress={() => navigation.navigate("UserProfile")}
        />
      ) : (
        <FontAwesome
          name="user"
          size={24}
          color="black"
          style={icon1}
          onPress={() => navigation.navigate("UserProfile")}
        />
      )}
    </View>
  );
};

export default Bottomnavbar;

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
    paddingVertical: 10,
    alignItems: "center",
  },
  activeicon1: {
    backgroundColor: "white",
    borderRadius: 50,
    fontSize: 30,
    padding: 10,
  },
});
