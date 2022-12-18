import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomNavBar from "../../components/BottomNavBar";
import TopNavBar from "../../components/TopNavBar";
import usericon from "../../../assets/usericon.png";

const UserProfile = ({ navigation }) => {
  const [userdata, setUserdata] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then(async (value) => {
        fetch("http://192.168.0.105:3000/userdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer' + JSON.parse(value).token
          }
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message == "User Found") {
              setUserdata(data.user);
            } else {
              alert("Login Again");
              navigation.navigate("Login");
            }
          })
          .catch((err) => {
            navigation.navigate("Login");
          });
      })
      .catch((err) => {
        navigation.navigate("Login");
      });
  }, []);

  console.log("userdata", userdata);

  const data = {
    username: "diven1209",
    followers: 121,
    following: 20,
    description: "I am React developer",
    profilepic: "https://picsum.photos/500/500",
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
      {userdata ? (
        <ScrollView>
          <View style={styles.c1}>
            <Image style={styles.profilepic} source={usericon} />

            <Text style={styles.txt}>@{userdata.username}</Text>
            <View style={styles.c11}>
              <View style={styles.c111}>
                <Text style={styles.txt1}>Follower</Text>
                <Text style={styles.txt2}>{userdata.followers.length}</Text>
              </View>
              <View style={styles.vr1}></View>
              <View style={styles.c111}>
                <Text style={styles.txt1}>Following</Text>
                <Text style={styles.txt2}>{userdata.following.length}</Text>
              </View>
              <View style={styles.vr1}></View>
              <View style={styles.c111}>
                <Text style={styles.txt1}>Posts</Text>
                <Text style={styles.txt2}>{userdata.posts.length}</Text>
              </View>
            </View>
            {userdata.description.length > 0 && (
              <Text style={styles.description}>{userdata.description}</Text>
            )}
          </View>
          <View style={styles.hr1} />
          {userdata.posts.length > 0 ? (
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
          ) : (
            <View style={styles.c2}>
              <Text style={styles.txt1}>No Post</Text>
            </View>
          )}
        </ScrollView>
      ) : (
        <ActivityIndicator size="large" color="white" />
      )}
      <BottomNavBar navigation={navigation} page={"UserProfile"} />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
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
    margin: 3,
  },
  postpic: {
    width: "32.8%",
    height: 170,
    margin: 1,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 1,
  },
  c13: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  c2: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
});
