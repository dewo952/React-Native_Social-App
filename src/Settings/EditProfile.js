import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { formHead } from "../styles/CommonCss/formcss";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={24}
        style={styles.gohomeicon}
        onPress={() => navigation.navigate("UserProfile")}
      />
      <Text style={formHead}>Edit Profile</Text>
      <Text
        style={styles.txt1}
        onPress={() => navigation.navigate("Edit_Profile")}
      >
        Change Profile Picture
      </Text>
      <Text
        style={styles.txt1}
        onPress={() => navigation.navigate("Change_Username")}
      >
        Change Username
      </Text>
      <Text
        style={styles.txt1}
        onPress={() => navigation.navigate("Change_Description")}
      >
        Change Description
      </Text>
    </View>
  );
};
export default EditProfile;

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
