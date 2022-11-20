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
  formHead3,
  formInput,
  formTextLinkRight,
} from "../../../components/CommonCss/formcss";

const ForgotPassword_EnterCode = ({ navigation }) => {
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
          Verification
        </Text>
      <Image source={log} style={logo1} />
      <Text style={formHead3}>Enter Verification Code</Text>
      <TextInput placeholder="123456" style={formInput} />
      <Text
        style={formbtn}
        onPress={() => navigation.navigate("ForgotPassword_ChoosePassword")}
      >
        Verify
      </Text>
    </View>
  );
};


export default ForgotPassword_EnterCode

const styles = StyleSheet.create({})