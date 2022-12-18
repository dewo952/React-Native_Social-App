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
import {
  containerFull,
  goback1,
  logo1,
} from "../../../styles/CommonCss/pagecss";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import log from "../../../../assets/log.png";
import {
  formbtn,
  formHead2,
  formInput,
} from "../../../styles/CommonCss/formcss";

const Signup_EnterUsername = ({ navigation, route }) => {
  const { email } = route.params;
  const [username, setusername] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUsername = () => {
    if (username == "") {
      alert("Please enter username");
    } else {
      setLoading(true);
      fetch("http://192.168.0.105:3000/changeusername", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email, 
          username: username,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Username Available") {
            setLoading(false);
            alert("Username has been set successfully");
            navigation.navigate("Signup_ChoosePassword", {
              email: email,
              username: username,
            });
          } else {
            setLoading(false);
            alert("Username not available");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={goback1}
      >
        <MaterialCommunityIcons name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <Image source={log} style={logo1} />
      <Text style={formHead2}>Choose A Username</Text>
      <TextInput
        placeholder="Enter a username"
        style={formInput}
        onChangeText={(text) => setusername(text)}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={formbtn} onPress={() => handleUsername()}>
          Next
        </Text>
      )}
    </View>
  );
};
export default Signup_EnterUsername;

const styles = StyleSheet.create({});
