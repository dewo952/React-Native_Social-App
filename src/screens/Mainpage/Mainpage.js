import { StyleSheet, View, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";

import BottomNavBar from "../../components/BottomNavBar";
import TopNavBar from "../../components/TopNavBar";
import FollowersRandomPost from "../../components/FollowersRandomPost";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Mainpage = ({ navigation }) => {
  const [userdata, setUserdata] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((data) => {
        setUserdata(JSON.parse(data));
      })
      .catch((err) => alert(err));
  }, []);
  console.log("userdata", userdata);
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} page={"Mainpage"} />
      <FollowersRandomPost />
      <BottomNavBar navigation={navigation} page={"Mainpage"} />
    </View>
  );
};

export default Mainpage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
    paddingVertical: 50,
  },
});
