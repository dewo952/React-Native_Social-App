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
import { containerFull, goback1, logo1 } from "../styles/CommonCss/pagecss";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import log from "../../assets/log.png";
import { formbtn, formHead2, formInput } from "../styles/CommonCss/formcss";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ChangeDescription = ({ navigation }) => {
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const handleDescription = () => {
    if (description == "") {
      alert("Please Fill The Description");
    } else {
      setLoading(true);
      AsyncStorage.getItem("user")
        .then((data) => {
          fetch("http://192.168.0.105:3000/setdescription", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: JSON.parse(data).user.email,
              description: description,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.message === "Description Updated Successfully") {
                setLoading(false);
                alert("Description has been set successfully");
                navigation.navigate("Setting");
              } else if (data.error === "Invalid Credentials") {
                alert("Invalid Credentials");
                setLoading(false);
                navigation.navigate("Login");
              } else {
                setLoading(false);
                alert("Please Try Again");
              }
            })
            .catch((err) => {
              alert("Something went wrong");
              setLoading(false);
            });
        })
        .catch((err) => {
          alert("Something went wrong");
          setLoading(false);
        });
    }
  };

  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Edit_Profile")}
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 10,
          left: 10,
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
          bottom: 225,
        }}
      >
        Change Description
      </Text>
      <Image source={log} style={logo1} />
      <Text style={formHead2}>About You</Text>
      <TextInput
        placeholder="Enter Description"
        style={formInput}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
        numberOfLines={5}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={formbtn} onPress={() => handleDescription()}>
          Save
        </Text>
      )}
    </View>
  );
};

export default ChangeDescription;

const styles = StyleSheet.create({});
