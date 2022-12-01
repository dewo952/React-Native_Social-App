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
  goback,
  logo1,
} from "../../../styles/CommonCss/pagecss";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import log from "../../../../assets/log.png";
import {
  formbtn,
  formHead3,
  formInput,
} from "../../../styles/CommonCss/formcss";

const Signup_Verification = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={goback}
      >
        <MaterialCommunityIcons name="chevron-left" size={24} color="gray" />
      </TouchableOpacity>
      <Image source={log} style={logo1} />
      <Text style={formHead3}>Enter Verification Code</Text>
      <TextInput placeholder="123456" style={formInput} />
      <Text
        style={formbtn}
        onPress={() => navigation.navigate("Signup_EnterUsername")}
      >
        Verify
      </Text>
    </View>
  );
};
export default Signup_Verification;

const styles = StyleSheet.create({});
