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

const ForgotPassword_EnterCode = ({ navigation, route }) => {
  const { useremail, userVerificationCode } = route.params;
  const [verificationCode, setVerificationCode] = useState("");

  const handleVerificationCode = () => {
    if (verificationCode != userVerificationCode) {
      alert("Invalid Verification Code ");
    } else {
      alert("Verification Code Matched");
      navigation.navigate("ForgotPassword_ChoosePassword", {
        email: useremail,
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
      <Text style={forgotPassword}>Verification</Text>
      <Image source={log} style={logo1} />
      <Text style={formHead3}>Enter Verification Code</Text>
      <TextInput placeholder="123456" style={formInput}
      onChangeText={(text)=> setVerificationCode(text)} />
      <Text
        style={formbtn}
        onPress={() => handleVerificationCode()}
      >
        Verify
      </Text>
    </View>
  );
};

export default ForgotPassword_EnterCode;

const styles = StyleSheet.create({});
