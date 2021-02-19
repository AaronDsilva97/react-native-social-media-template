import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TabView, SceneMap } from "react-native-tab-view";

const width = Dimensions.get("window").width;
var userImages = [
  {
    id: 1,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 2,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 3,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 4,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 5,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 6,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 7,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 8,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 9,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 10,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 11,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 12,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 13,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 14,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 15,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 16,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 17,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
  {
    id: 18,
    imageUri: "https://picsum.photos/seed/picsum/200/300",
    categoryTitle: "New",
  },
];

const imageRender = ({ item }) => {
  return (
    // <View style={{flex:1, padding}}>
    <Image
      style={{
        height: width / 3,
        width: width / 3,
        borderWidth: 1,
        borderColor: "#000000",
      }}
      source={{ uri: item.imageUri }}
      resizeMode="cover"
    />
    // </View>
  );
};

const FirstRoute = () => (
  <View style={styles.scene}>
    <FlatList
      data={userImages}
      numColumns={3}
      keyExtractor={(item) => item.id}
      renderItem={imageRender}
    />
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]}>
    <FlatList
      data={userImages}
      numColumns={3}
      keyExtractor={(item) => item.id}
      renderItem={imageRender}
    />
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

var categoryList = [
  { imageUri: "https://picsum.photos/200", categoryTitle: "New" },
  { imageUri: "https://picsum.photos/200", categoryTitle: "Behance" },
  { imageUri: "https://picsum.photos/200", categoryTitle: "Dribble " },
  { imageUri: "https://picsum.photos/200", categoryTitle: "Pinterest" },
  { imageUri: "https://picsum.photos/200", categoryTitle: "world" },
];

const PostDetail = ({ value, detail }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>{value}</Text>
      <Text>{detail}</Text>
    </View>
  );
};

const renderItem = ({ item }) => {
  return (
    <View style={{ paddingRight: 10, alignItems: "center" }}>
      <Image
        style={{ height: 80, width: 80, borderRadius: 20 }}
        source={{ uri: `${item.imageUri}` }}
        resizeMode="cover"
      />
      <Text>{item.categoryTitle}</Text>
    </View>
  );
};

const CategoryLine = () => {
  return (
    <FlatList
      horizontal
      data={categoryList}
      keyExtractor={(item) => item.categoryTitle}
      renderItem={renderItem}
    />
  );
};

const Profile = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Images" },
    { key: "second", title: "Tags" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 10 }}>
        <View style={styles.header}>
          <Text style={{ fontSize: 24 }}>
            Aaron <Icon name="menu-down" size={24} color="black" />{" "}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="plus-thick" size={36} color="black" />
            <Icon name="menu" size={36} color="black" />
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Image
            style={{ height: 100, width: 100, borderRadius: 20 }}
            source={{ uri: "https://picsum.photos/id/237/200/300" }}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: "row",
              width: "75%",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <PostDetail value={21} detail="Posts" />
            <PostDetail value={1333} detail="Followers" />
            <PostDetail value={2040} detail="Following" />
          </View>
        </View>
        <View style={{ paddingTop: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text>Aaron Dsilva</Text>
            {/* <Text style={{fontSize: 12}}> Does Everything and Anything</Text> */}
          </View>
          <Text>Because sky is the limit</Text>
        </View>
        <View style={styles.editLine}>
          <TouchableOpacity style={styles.editButton}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton}>
            <Text>Statitics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton}>
            <Text>Saved</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryLine}>
          <CategoryLine />
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    // marginHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  editLine: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },

  editButton: {
    borderWidth: 1,
    alignItems: "center",
    // paddingHorizontal: "8%",
    width: "30%",
    paddingVertical: 5,
    borderRadius: 5,
  },
  categoryLine: {
    // flex: 1,
    flexDirection: "row",
    // width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
  },
  scene: {
    flex: 1,
  },
});
