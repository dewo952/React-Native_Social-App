import React, {useState} from "react";
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
  formHead3,
  formInput,
} from "../../../styles/CommonCss/formcss";

const Signup_Verification = ({ navigation , route}) => {
  const { useremail, userVerificationCode } = route.params;
 

  const [verificationCode, setVerificationCode] = useState("");

  const handleVerificationCode = () => {
    if (verificationCode != userVerificationCode) {
      alert("Invalid Verification Code");
    } else if (verificationCode == userVerificationCode) {
      alert("Verification Code Matched");
      navigation.navigate("Signup_EnterUsername", { email: useremail });
    } else {
      alert("Please Try Again");
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
      <Text style={formHead3}>Enter Verification Code</Text>
      <TextInput
        placeholder="123456"
        style={formInput}
        onChangeText={(text) => setVerificationCode(text)}
      />

      <Text style={formbtn} onPress={() => handleVerificationCode()}>
        Verify
      </Text>
    </View>
  );
};
export default Signup_Verification;

const styles = StyleSheet.create({});
