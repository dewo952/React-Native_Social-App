import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { containerFull } from "../../components/CommonCss/pagecss";
import { formHead } from "../../components/CommonCss/formcss";
import BottomNavBar from "../../components/BottomNavBar";
import TopNavBar from "../../components/TopNavBar";
import FollowersRandomPost from "../../components/FollowersRandomPost";

const Mainpage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar />
      <BottomNavBar /> 
      <FollowersRandomPost />
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
