import React from "react";
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
  forgotPassword,
  goback,
  logo1,
} from "../../../components/CommonCss/pagecss";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import log from "../../../../assets/log.png";
import {
  formbtn,
  formHead2,
  formInput,
  formTextLinkRight,
} from "../../../components/CommonCss/formcss";

const ForgotPassword_EnterEmail = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={goback}
      >
        <MaterialCommunityIcons name="chevron-left" size={24} color="gray" />
      </TouchableOpacity>
        <Text
          style={forgotPassword}
        >
          Forgot Password
        </Text>
      <Image source={log} style={logo1} />
      <Text style={formHead2}>Enter Email Address</Text>
      <TextInput placeholder="example@gmail.com" style={formInput} />
      <Text
        style={formTextLinkRight}
        onPress={() => navigation.navigate("Login")}
      >
        Back to sign in
      </Text>
      <Text
        style={formbtn}
        onPress={() => navigation.navigate("ForgotPassword_EnterCode")}
      >
        Send
      </Text>
    </View>
  );
};

export default ForgotPassword_EnterEmail;

const styles = StyleSheet.create({});
