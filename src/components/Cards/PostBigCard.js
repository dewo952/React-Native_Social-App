import { StyleSheet, Text, View, Image } from "react-native";

import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { icon1 } from "../../styles/CommonCss/pagecss";

import { AntDesign } from "@expo/vector-icons";

const PostBigCard = ({
  post_image,
  profile_pic,
  username,
  likes,
  comments,
}) => {
  const [isliked, setIsliked] = useState(false);
  const [showComments, setShowComments] = useState (false)
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Image source={{ uri: profile_pic }} style={styles.profile_pic} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{ uri: post_image }} style={styles.image} />
      <View style={styles.s2}>
        {isliked ? (
          <View style={styles.s21}>
            <AntDesign
              name="heart"
              size={24}
              color="black"
              style={styles.iconliked}
              onPress={() => {
                setIsliked(false);
              }}
            />
            <Text style={styles.liked}>{likes.length + 1}</Text>
          </View>
        ) : (
          <View style={styles.s21}>
            <AntDesign
              name="hearto"
              size={24}
              color="black"
              style={icon1}
              onPress={() => {
                setIsliked(true);
              }}
            />
            <Text style={styles.liked}>{likes.length}</Text>
          </View>
        )}
        <View style={styles.s22}>
        <FontAwesome name="comment" size={24} color="black" style={icon1} onPress={() => {
          setShowComments(!showComments)
        }} />
        </View>
      </View>
      {
        showComments == true && <View style={styles.s3}>{
          comments.map((item,index) => {
            return (
              <View style={styles.s31} key={item.id}>
                <Text style={styles.commentsusername}>{item.username}</Text>
                <Text style={styles.comment}>{item.comment}</Text>
              </View>
            )
          })
        }
        </View>
      }
    </View>
  );
};

export default PostBigCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "white",
    borderWidth: 1,
  },
  c1: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 10,
    backgroundColor: "black",
  },
  profile_pic: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderColor: "red",
    borderWidth: 1,
  },
  username: {
    color: "white",
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  s2: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
  },
  s21: {
    flexDirection: "row",
    alignItems: "center",
  },
  notliked: {
    color: "grey",
    marginLeft: 5,
    fontSize: 25,
  },
  liked: {
    color: "white",
    marginLeft: 5,
    fontSize: 25,
  },
  iconliked: {
    color: "#DC143C",
    fontSize: 30,
  },
  s22: {

    marginLeft: 20,
  },
  s3: {
    width: '100%',
    backgroundColor: '#111111',
    padding: 10
  },
  s31: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  commentsusername: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  comment: {
    color: 'grey',
    fontSize: 17,
    marginLeft: 5,

  }
});
