import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { containerFull, goback1, logo1 } from "../styles/CommonCss/pagecss";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import log from "../../assets/log.png";
import { formbtn, formHead2, formInput } from "../styles/CommonCss/formcss";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChangeUsername = ({ navigation }) => {
  const [username, setusername] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUsername = () => {
    if (username == "") {
      alert("Please enter new username");
    } else {
      setLoading(true);

      AsyncStorage.getItem("user").then((data) => {
        fetch("http://192.168.0.105:3000/setusername", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: JSON.parse(data).user.email,
            username: username,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Username Changed Successfully") {
              setLoading(false);
              alert("Username has been Updated Successfully");
              navigation.navigate("Setting");
            } else if (data.error === "Invalid Credentials") {
              alert("Invalid Credentials");
              setLoading(false);
              AsyncStorage.removeItem("user");
              navigation.navigate("Login");
            } else {
              setLoading(false);
              alert("Username not Available");
            }
          })
          .catch((err) => {
            console.log("Server Error");
          });
      });
    }
  };
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Edit_Profile")}
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 5,
          left: 10,
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
          bottom: 228,
        }}
      >
        Change Username
      </Text>
      <Image source={log} style={logo1} />
      <Text style={formHead2}>Change Username</Text>
      <TextInput
        placeholder="Enter new username"
        style={formInput}
        onChangeText={(text) => setusername(text)}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={formbtn} onPress={() => handleUsername()}>
          Save
        </Text>
      )}
    </View>
  );
};

export default ChangeUsername;

const styles = StyleSheet.create({});
