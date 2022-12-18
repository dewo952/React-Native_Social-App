import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { formHead } from "../styles/CommonCss/formcss";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = ({ navigation }) => {
  const logout = () => {
    AsyncStorage.removeItem("user").then(() => {
      navigation.navigate("Login");
    });
  };
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={24}
        style={styles.gohomeicon}
        onPress={() => navigation.navigate("UserProfile")}
      />
      <Text style={formHead}>Settings</Text>
      <Text style={styles.txt1}>Edit Profile</Text>
      <Text style={styles.txt1} onPress={() => navigation.navigate('Change_Password')}>Change Password</Text>
      <Text style={styles.txt1}>Customer Support</Text>
      <Text style={styles.txt1} onPress={() => logout()}>
        LogOut
      </Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  gohomeicon: {
    position: "absolute",
    top: 15,
    left: 20,
    zIndex: 10,
    color: "white",
    fontSize: 30,
  },
  txt1: {
    marginTop: 20,
    color: "white",
    fontSize: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
});
