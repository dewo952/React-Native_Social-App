import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { searchbar } from "../../styles/CommonCss/pagecss";

import BottomNavBar from "../../components/BottomNavBar";
import TopNavBar from "../../components/TopNavBar";
import { formHead } from "../../styles/CommonCss/formcss";
import UserCards from "../../components/Cards/UserCards";
const SearchUser = ({ navigation }) => {
  let data = [
    {
      username: "Vinayak",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak1",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak2",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak3",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak4",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak5",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak6",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak7",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak8",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak9",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak10",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak11",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Vinayak12",
      profile_image: "https://picsum.photos/200/300",
    },
  ];

  const [keyword, setKeyowrd] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} />
      <Text style={formHead}>Search USer</Text>
      <BottomNavBar navigation={navigation} page={"SearchUser"} />
      <TextInput
        placeholder="Search user..."
        style={searchbar}
        onChange={(text) => {
          setKeyowrd(text);
        }}
      />
      <ScrollView style={styles.userlist}>
        {data
          .filter((user) => {
            if (keyword === "") {
              return null;
            } else if (
              user.username.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return user;
            }
          })
          .map((item, index) => {
            return <UserCards key={item.username} user={item} />;
          })}
      </ScrollView>
    </View>
  );
};

export default SearchUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
    paddingVertical: 50,
  },
  userlist: {
    width: "100%",
    marginTop: 10,
  },
});
