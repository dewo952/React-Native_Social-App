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
  forgotPassword,
  goback,
  logo1,
} from "../../../styles/CommonCss/pagecss";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import log from "../../../../assets/log.png";
import {
  formbtn,
  formHead2,
  formHead3,
  formInput,
  formTextLinkRight,
} from "../../../styles/CommonCss/formcss";

const ForgotPassword_ChoosePassword = ({ navigation, route }) => {
  const { email } = route.params;
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = () => {
    if (password == "" || confirmpassword == "") {
      alert("Please enter password");
    } else if (password != confirmpassword) {
      alert("Password does not match");
    } else {
      setLoading(true);
      fetch("http://192.168.0.105:3000/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Password Changed Successfully") {
            setLoading(false);
            alert(data.message);
            navigation.navigate("ForgotPassword_AccountRecovered");
          } else {
            setLoading(false);
            alert("Something went wrong");
          }
        })
        .catch((err) => {
          setLoading(false);
          alert(err);
        });
    }

    
  };
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={goback}
      >
        <MaterialCommunityIcons name="chevron-left" size={24} color="gray" />
      </TouchableOpacity>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
          bottom: 157,
        }}
      >
        New Password
      </Text>
      <Image source={log} style={logo1} />
      <Text style={formHead3}>Enter New Password</Text>
      <TextInput
        placeholder="8 symbls at least"
        style={formInput}
        secureTextEntry
        onChangeText={(text) => setpassword(text)}
      />
      <TextInput
        placeholder="********"
        style={formInput}
        secureTextEntry
        onChangeText={(text) => setconfirmpassword(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={formbtn} onPress={() => handlePasswordChange()}>
          Confirm
        </Text>
      )}
    </View>
  );
};

export default ForgotPassword_ChoosePassword;

const styles = StyleSheet.create({});
