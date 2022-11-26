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
  formHead2,
  formInput,
} from "../../../styles/CommonCss/formcss";

const Signup_EnterEmail = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={goback}
      >
        <MaterialCommunityIcons name="chevron-left" size={24} color="gray" />
      </TouchableOpacity>
      <Image source={log} style={logo1} />
      <Text style={formHead2}>Create a new account</Text>
      <TextInput placeholder="example@gmail.com" style={formInput} />
      <Text
        style={formbtn}
        onPress={() => navigation.navigate("Signup_Verification")}
      >
        Next
      </Text>
    </View>
  );
};
export default Signup_EnterEmail;

const styles = StyleSheet.create({});
