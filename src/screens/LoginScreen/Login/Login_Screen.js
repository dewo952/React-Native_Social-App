import React from "react";
import { Text, StyleSheet, View, Image, TextInput } from "react-native";
import log from "../../../../assets/log.png";
import {
  containerFull,
  hr80,
  logo,
} from "../../../components/CommonCss/pagecss";
import {
  formbtn,
  formHead,
  formInput,
  formTextLinkCenter,
  formTextLinkRight,
} from "../../../components/CommonCss/formcss";

const Login_Screen = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <Image source={log} style={logo}/>
      <Text style={formHead}>Login </Text>
      <TextInput placeholder="example@gmail.com" style={formInput} />
      <TextInput
        placeholder="********"
        style={formInput}
        secureTextEntry={true}
      />
      <Text
        style={formTextLinkRight}
        onPress={() => navigation.navigate("ForgotPassword_EnterEmail")}
      >
        Forgot Password
      </Text>
      <Text style={formbtn} onPress={() => navigation.navigate("Mainpage")}>
        Login
      </Text>
      <View style={hr80}></View>

      <Text style={formTextLinkCenter}>
        Don't have an account? <Text
          style={{ color: "white"}}
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
