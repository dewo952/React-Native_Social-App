import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import log from "../../../../assets/log.png";
import { containerFull, hr80, logo } from "../../../styles/CommonCss/pagecss";
import {
  formbtn,
  formHead,
  formInput,
  formTextLinkCenter,
  formTextLinkRight,
} from "../../../styles/CommonCss/formcss";

const Login_Screen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (email == "" || password == "") {
      alert("Please enter email and password");
    } else {
      setLoading(true);
      fetch("http://192.168.0.105:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.error) {
            setLoading(false);
            alert(data.error);
          } else if (data.message == "Successfully Signed In") {
            setLoading(false);
            await AsyncStorage.setItem("user", JSON.stringify(data));
            navigation.navigate("Mainpage", { data });
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
      <Image source={log} style={logo} />
      <Text style={formHead}>Login</Text>
      <TextInput
        placeholder="Enter Your Email"
        style={formInput}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Enter Your Password"
        style={formInput}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Text
        style={formTextLinkRight}
        onPress={() => navigation.navigate("ForgotPassword_EnterEmail")}
      >
        Forgot Password?
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={formbtn} onPress={() => handleLogin()}>
          Submit
        </Text>
      )}

      <View style={hr80}></View>

      <Text style={formTextLinkCenter}>
        Don't have an account?{" "}
        <Text
          style={{ color: "white" }}
          onPress={() => navigation.navigate("Signup_EnterEmail")}
        >
          Signup
        </Text>
      </Text>
    </View>
  );
};

export default Login_Screen;

const styles = StyleSheet.create({});
