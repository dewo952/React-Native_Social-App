import { StyleSheet, View, StatusBar, Text } from "react-native";
import React from "react";

import BottomNavBar from "../../components/BottomNavBar";
import TopNavBar from "../../components/TopNavBar";
import {formHead} from '../../styles/CommonCss/formcss'
const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} />
      <Text style={formHead}>Notifications</Text>
      <BottomNavBar navigation={navigation} page={'Notification'} />
      <View style={styles.c1}>
        <View style={styles.notificationbar}>
          <Text>Noticfication</Text>
        </View>
        <View style={styles.notificationbar}>
          <Text>Noticfication</Text>
        </View>
        <View style={styles.notificationbar}>
          <Text>Noticfication</Text>
        </View>
        <View style={styles.notificationbar}>
          <Text>Noticfication</Text>
        </View>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
    paddingVertical: 50,
  },
  notificationbar: {
    width: '95%',
    height: 50,
    backgroundColor: 'white',
    marginTop: 10,
  },
  c1: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  }

});
