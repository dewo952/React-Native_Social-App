import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { containerFull } from "../../components/CommonCss/pagecss";
import { formHead } from "../../components/CommonCss/formcss";
import BottomNavBar from "../../components/BottomNavBar";
import TopNavBar from "../../components/TopNavBar";

const Mainpage = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <StatusBar />
      <TopNavBar/>
      <BottomNavBar/>
      <Text style={formHead}>Mainpage</Text>
    </View>
  );
};

export default Mainpage;

const styles = StyleSheet.create({});
