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
} from "../../../components/CommonCss/pagecss";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import log from "../../../../assets/log.png";
import {
  formbtn,
  formHead2,
  formInput,
} from "../../../components/CommonCss/formcss";

const SignUp_ChoosePassword = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={goback}
      >
        <MaterialCommunityIcons name="chevron-left" size={24} color="gray" />
      </TouchableOpacity>
      <Image source={log} style={logo1} />
      <Text style={formHead2}>Choose A strong password</Text>
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
        onPress={() => navigation.navigate("Signup_AccountCreated")}
      >
        Submit
      </Text>
    </View>
  );
};

export default SignUp_ChoosePassword;

const styles = StyleSheet.create({});
