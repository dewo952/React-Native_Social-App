import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ChatCard = ({ chat }) => {
  return (
    <View style={styles.ChatContainer}>
      <Image source={{ uri: chat.profile_image }} style={styles.image} />
      <View style={styles.c1}>
        <Text style={styles.username}>{chat.username}</Text>
        <Text style={styles.lastmessage}>{chat.lastmessage}</Text>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  ChatContainer: {
    backgroundColor: "#111111",
    width: "100%",
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  username: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  c1: {
    marginLeft: 10,
  },
  lastmessage: {
    color: "gray",
    fontSize: 19,
  },
});
