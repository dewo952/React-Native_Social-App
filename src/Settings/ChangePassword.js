import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { containerFull, goback, logo1 } from "../styles/CommonCss/pagecss";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import log from "../../assets/log.png";
import {
  formbtn,
  formHead3,
  formInput,
  formTextLinkRight,
} from "../styles/CommonCss/formcss";

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = () => {
    if (
      !oldPassword === "" ||
      newPassword === "" ||
      confirmNewPassword === ""
    ) {
      alert("Please add all fields");
    } else if (newPassword !== confirmNewPassword) {
      alert("New password and Confirm password must be same");
    } else {
    }
  };

  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Setting")}
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
        Change Password
      </Text>
      <Image source={log} style={logo1} />
      {/* <Text style={formHead3}>Enter Details </Text> */}
      <TextInput
        placeholder="Old Password"
        style={formInput}
        secureTextEntry
        onChangeText={(text) => setOldPassword(text)}
      />
      <TextInput
        placeholder="New Password"
        style={formInput}
        secureTextEntry
        onChangeText={(text) => setNewPassword(text)}
      />
      <TextInput
        placeholder="Confirm New Password"
        style={formInput}
        secureTextEntry
        onChangeText={(text) => setConfirmNewPassword(text)}
      />
      <Text
        style={formTextLinkRight}
        onPress={() => navigation.navigate("ForgotPassword_EnterEmail")}
      >
        Forgot Password?
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={formbtn} onPress={() => handleChangePassword()}>
          Confirm
        </Text>
      )}
    </View>
  );
};
export default ChangePassword;

const styles = StyleSheet.create({});
