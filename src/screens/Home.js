import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const width = Dimensions.get("window").width;

const storyData = [
  { id: 1, imageId: 0, username: "username" },
  { id: 2, imageId: 1, username: "username1" },
  { id: 3, imageId: 10, username: "username12" },
  { id: 4, imageId: 1001, username: "usersname" },
  { id: 5, imageId: 1004, username: "users123name" },
  { id: 6, imageId: 1003, username: "123username" },
  { id: 7, imageId: 1010, username: "use45rname" },
  { id: 8, imageId: 101, username: "usern6ame" },
  { id: 9, imageId: 1009, username: "userndame" },
  { id: 10, imageId: 1011, username: "userdsvsname" },
  { id: 11, imageId: 1016, username: "usernamvse" },
  { id: 12, imageId: 1014, username: "usernamess" },
  { id: 13, imageId: 1005, username: "usernasdsdfme" },
];

const Story = ({ item }) => {
  return (
    <View style={{ paddingRight: 15 }}>
      <Image
        style={{
          height: width * 0.16,
          width: width * 0.16,
          borderRadius: width * 0.08,
        }}
        source={{
          uri: `https://picsum.photos/id/${item.imageId}/200/300`,
        }}
        resizeMode="cover"
      />
      <Text style={{ fontWeight: "600", width: 80 }} numberOfLines={1}>
        {item.username}
      </Text>
    </View>
  );
};
const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingTop: 5,
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}
      >
        <Icon name="plus-circle-outline" size={24} />
        <Text> Home</Text>
        <Icon name="message" size={24} />
      </View>
      <View style={{ padding: 10 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={storyData}
          keyExtractor={(key) => key.id.toString()}
          renderItem={Story}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginHorizontal: 10,
            }}
            source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
            resizeMode="cover"
          />
          <Text>Username</Text>
        </View>
        <Icon name="dots-vertical" size={24} style={{ paddingRight: 10 }} />
      </View>
      <Image
        style={{
          width: width,
          height: width,
          marginVertical: 4,
        }}
        source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
        resizeMode="cover"
      />
      <View style={{ marginLeft: 10, justifyContent: "flex-start" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="heart-outline" size={28} style={{ paddingRight: 15 }} />
            <Icon
              name="comment-outline"
              size={28}
              style={{ paddingRight: 15 }}
            />
            <Icon name="share" size={28} />
          </View>
          <Icon
            name="bookmark-outline"
            size={28}
            style={{ paddingHorizontal: 15 }}
          />
        </View>
        <Text>2309 likes</Text>
        <Text>username My caption will be put here</Text>
        <Text>View all 54 comments </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <Image
            style={{
              width: width * 0.06,
              height: width * 0.06,
              borderRadius: width * 0.3,
              marginRight: 10,
            }}
            source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
            resizeMode="cover"
          />
          <Text>Add a comment ...</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  button: {
    padding: 20,
    borderRadius: 20,
    margin: 10,
    elevation: 12,
  },
});
