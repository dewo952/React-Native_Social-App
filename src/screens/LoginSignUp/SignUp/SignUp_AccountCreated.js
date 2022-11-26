import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import {
  containerFull,
  goback,
  logo1,
  row,
} from "../../../styles/CommonCss/pagecss";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import log from "../../../../assets/log.png";
import { formbtn, formHead2 } from "../../../styles/CommonCss/formcss";

const SignUp_AccountCreated = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={goback}
      >
        <MaterialCommunityIcons name="chevron-left" size={24} color="gray" />
      </TouchableOpacity>
      <Image source={log} style={logo1} />
      <View style={row}>
        <Text style={formHead2}>Account Created Successfully</Text>
        <MaterialCommunityIcons
          name="check-decagram"
          size={24}
          color="pink"
          style={{ marginLeft: 6 }}
        />
      </View>
      <Text style={formbtn} onPress={() => navigation.navigate('Login')}>Login</Text>
    </View>
  );
};

export default SignUp_AccountCreated;

const styles = StyleSheet.create({});
