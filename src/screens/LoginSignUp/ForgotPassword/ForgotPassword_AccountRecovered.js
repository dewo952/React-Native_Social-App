import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import {
  containerFull,
  forgotPassword,
  goback,
  logo1,
  row,
} from "../../../styles/CommonCss/pagecss";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import log from "../../../../assets/log.png";
import { formbtn, formHead2 } from "../../../styles/CommonCss/formcss";

const ForgotPassword_AccountRecovered = ({ navigation }) => {
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
          bottom: 232,
        }}
      >
        Account Recovered
      </Text>
      <Image source={log} style={logo1} />
      <View style={row}>
        <Text style={formHead2}>Account Recovered Successfully</Text>
      </View>
      <Text style={formbtn} onPress={() => navigation.navigate("Login")}>
        Login
      </Text>
    </View>
  );
};

export default ForgotPassword_AccountRecovered;

const styles = StyleSheet.create({});
