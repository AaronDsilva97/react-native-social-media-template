import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  StatusBar,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
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

const filter = [
  {
    id: 1,
    filterName: "myTV",
  },
  {
    id: 2,
    filterName: "Travel",
  },
  {
    id: 3,
    filterName: "Hobbies",
  },
  {
    id: 4,
    filterName: "Games",
  },
  {
    id: 5,
    filterName: "Astronomy",
  },
  {
    id: 6,
    filterName: "Science",
  },
  {
    id: 7,
    filterName: "Sports",
  },
  {
    id: 8,
    filterName: "Education",
  },
  {
    id: 9,
    filterName: "Arts",
  },
  {
    id: 10,
    filterName: "Artist",
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

const filterRender = ({ item }) => {
  return <Text style={styles.chips}>{item.filterName}</Text>;
};

const Explore = () => {
  const [value, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.element}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            width: width * 0.8,
            paddingHorizontal: 10,
          }}
          placeholder="Search"
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <Icon name="qrcode-scan" size={24} />
      </View>
      <View style={styles.chipContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filter}
          keyExtractor={(item) => item.id.toString()}
          renderItem={filterRender}
        />
      </View>
      <FlatList
        data={userImages}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={imageRender}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    // marginHorizontal: 20,
    flex: 1,
  },
  element: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    alignItems: "center",
  },
  chipContainer: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
    marginHorizontal: 18,
    paddingVertical: 8,
    alignItems: "center",
  },
  chips: {
    borderWidth: 0.2,
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 4,
    marginRight: 10,
  },
});
