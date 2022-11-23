import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import log2 from "../../assets/log2.png";
import { logo2, icon1 } from "../components/CommonCss/pagecss";
import { Ionicons } from "@expo/vector-icons";

const TopNavBar = () => {
  return (
    <View style={styles.container}>
      <Image source={log2} style={logo2} />
      <Ionicons name="chatbubble-outline" size={24} color="white" style={icon1} />
    </View>
  );
};

export default TopNavBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'absolute',
        top: 0,
        zIndex: 100,
        backgroundColor: '#111111'
    }
});
