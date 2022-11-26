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

const ForgotPassword_ChoosePassword = ({ navigation }) => {
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
      />
      <TextInput
        placeholder="********"
        style={formInput}
        secureTextEntry
      />
      <Text
        style={formbtn}
        onPress={() => navigation.navigate("ForgotPassword_AccountRecovered")}
      >
        Submit
      </Text>
    </View>
  );
};

export default ForgotPassword_ChoosePassword;

const styles = StyleSheet.create({});
