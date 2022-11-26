import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

import BottomNavBar from "../../components/BottomNavBar";
import TopNavBar from "../../components/TopNavBar";

const UserProfile = ({ navigation }) => {
  const data = {
    username: "diven1209",
    followers: 121,
    following: 20,
    description: "I am React developer",
    profile_image: "https://picsum.photos/500/500",
    posts: [
      {
        id: 1,
        post_image: "https://picsum.photos/400/400",
      },
      {
        id: 2,
        post_image: "https://picsum.photos/300/300",
      },
      {
        id: 3,
        post_image: "https://picsum.photos/200/200",
      },
      {
        id: 4,
        post_image: "https://picsum.photos/250/150",
      },
      {
        id: 5,
        post_image: "https://picsum.photos/550/250",
      },
      {
        id: 6,
        post_image: "https://picsum.photos/550/350",
      },
      {
        id: 7,
        post_image: "https://picsum.photos/550/450",
      },
      {
        id: 8,
        post_image: "https://picsum.photos/550/660",
      },
    ],
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} page={"UserProfile"} />
      <ScrollView>
        <View style={styles.c1}>
          <Image
            style={styles.profilepic}
            source={{ uri: data.profile_image }}
          />
          <Text style={styles.txt}>@{data.username}</Text>
          <View style={styles.c11}>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Follower</Text>
              <Text style={styles.txt2}>{data.followers}</Text>
            </View>
            <View style={styles.vr1}></View>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Following</Text>
              <Text style={styles.txt2}>{data.following}</Text>
            </View>
            <View style={styles.vr1}></View>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Posts</Text>
              <Text style={styles.txt2}>{data.posts.length}</Text>
            </View>
          </View>
          <Text style={styles.description}>{data.description}</Text>
        </View>
        <View style={styles.hr1} />
        <View style={styles.c1}>
          <View style={styles.c13}>
            {data.posts.map((item) => {
              return (
                <Image
                  key={item.id}
                  style={styles.postpic}
                  source={{ uri: item.post_image }}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} page={"UserProfile"} />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
    paddingVertical: 50,
  },
  c1: {
    width: "100%",
    alignItems: "center",
  },
  txt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#111111",
  },
  profilepic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 10,
  },
  txt1: {
    color: "white",
    fontSize: 15,
  },
  txt2: {
    color: "white",
    fontSize: 20,
  },
  c11: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  c111: {
    alignItems: "center",
  },
  vr1: {
    width: 1,
    height: 50,
    backgroundColor: "white",
  },
  description: {
    color: "white",
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: "#111111",
    padding: 10,
    width: "100%",
    paddingVertical: 20,
  },
  hr1: {
    margin: 5,
  },
  postpic: {
    width: "33%",
    height: 120,
    borderWidth: 1,
    borderColor: "black",
  },
  c13: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
});
