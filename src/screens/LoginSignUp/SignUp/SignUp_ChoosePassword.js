import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
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

const SignUp_ChoosePassword = ({ navigation, route }) => {
  const { email, username } = route.params;
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePassword = () => {
    if (password == "" || confirmpassword == "") {
      alert("Please enter password");
    } else if (password != confirmpassword) {
      alert("Password does not match");
    } else {
      setLoading(true);
      fetch("http://192.168.0.105:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "User Registered Successfully") {
            setLoading(false);
            alert(data.message);
            navigation.navigate("Login");
          } else {
            setLoading(false);
            alert("Please try again");
          }
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
      <Text style={formHead2}>Choose A strong password</Text>
      <TextInput placeholder="Enter password" style={formInput} secureTextEntry
                onChangeText={(text) => setpassword(text)}
            />
            <TextInput placeholder="Confirm password" style={formInput} secureTextEntry
                onChangeText={(text) => setconfirmpassword(text)}
            />
            <Text style={formbtn}
                onPress={() => handlePassword()}
            >
                Next
            </Text>
    </View>
  );
};

export default SignUp_ChoosePassword;

const styles = StyleSheet.create({});
