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
  formInput,
  formTextLinkRight,
} from "../../../styles/CommonCss/formcss";

const ForgotPassword_EnterEmail = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleEmail = () => {
    if (email === "") {
      alert("Please enter email");
    } else {
      setLoading(true);
      fetch("http://192.168.0.105:3000/verifyfp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error === "Invalid Credentials") {
            // alert('Invalid Credentials')
            alert("Invalid Credentials");
            setLoading(false);
          } else if (data.message === "Verification Code Sent to your Email") {
            setLoading(false);
            alert(data.message);

            navigation.navigate("ForgotPassword_EnterCode", {
              useremail: data.email,
              userVerificationCode: data.VerificationCode,
            });
          }
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
      <Text style={forgotPassword}>Forgot Password</Text>
      <Image source={log} style={logo1} />
      <Text style={formHead2}>Enter Email Address</Text>
      <TextInput
        placeholder="Enter Your Email"
        style={formInput}
        onChangeText={(text) => setEmail(text)}
      />
      <Text
        style={formTextLinkRight}
        onPress={() => navigation.navigate("Login")}
      >
        Back to sign in
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={formbtn} onPress={() => handleEmail()}>
          Next
        </Text>
      )}
    </View>
  );
};

export default ForgotPassword_EnterEmail;

const styles = StyleSheet.create({});
