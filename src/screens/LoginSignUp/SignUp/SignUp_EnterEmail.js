import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator
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
  formHead2,
  formInput,
} from "../../../styles/CommonCss/formcss";

const Signup_EnterEmail = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleEmail = () => {
 
    if (email == "") {
      alert("Please enter email");
    } else {
      setLoading(true);
      fetch("http://192.168.0.105:3000/verify", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error === "Invalid Credentials") {
            
            alert("Invalid Credentials");
            setLoading(false);
          } else if (data.message === "Verification Code Sent to your Email") {
            setLoading(false);
            alert(data.message);
            navigation.navigate("Signup_Verification", {
              useremail: data.email,
              userVerificationCode: data.VerificationCode,
            });
          }
        });
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
      <Text style={formHead2}>Create a new account</Text>
      <TextInput placeholder="Enter Your Email" style={formInput}

                onChangeText={(text) => {
                    setEmail(text)
                }}
            />
            {
                loading ?
                    <ActivityIndicator size="large" color="white" />
                    :
                    <Text style={formbtn}
                        onPress={() => handleEmail()}
                    >
                        Next
                    </Text>
            }
    </View>
  );
};
export default Signup_EnterEmail;

const styles = StyleSheet.create({});
