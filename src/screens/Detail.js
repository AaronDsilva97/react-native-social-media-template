import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
const width = Dimensions.get("window").width;

const Notification = ({ imageUri, text, buttonText }) => {
  return (
    <View style={styles.notification}>
      <Image
        style={{
          height: width * 0.12,
          width: width * 0.12,
          borderRadius: (width * 0.12) / 2,
        }}
        source={{ uri: imageUri }}
        resizeMode="cover"
      />

      <Text
        style={{
          width: width * 0.6,
          textAlign: "left",
        }}
      >
        {text}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Following = ({ imageUri, text }) => {
  return (
    <View style={styles.following}>
      <Image
        style={{
          height: width * 0.12,
          width: width * 0.12,
          borderRadius: (width * 0.12) / 2,
        }}
        source={{ uri: imageUri }}
        resizeMode="cover"
      />

      <Text
        style={{
          width: width * 0.78,
          textAlign: "left",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

const Comments = ({ imageUri, text, myImageUri }) => {
  return (
    <View style={styles.notification}>
      <Image
        style={{
          height: width * 0.12,
          width: width * 0.12,
          borderRadius: (width * 0.12) / 2,
        }}
        source={{ uri: imageUri }}
        resizeMode="cover"
      />

      <Text
        style={{
          width: width * 0.6,
          textAlign: "left",
        }}
      >
        {text}
      </Text>
      <Image
        style={{
          height: width * 0.12,
          width: width * 0.12,
        }}
        source={{ uri: myImageUri }}
        resizeMode="cover"
      />
    </View>
  );
};

const Detail = () => {
  const { count } = useSelector((state) => state.counter);
  const { color } = useSelector((state) => state.theme);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 10 }}>
          <View style={styles.header}>
            <Text style={{ fontSize: 24 }}>Activity</Text>
          </View>
          <View style={styles.request}>
            <Image
              style={{ height: 50, width: 50, borderRadius: 25 }}
              source={{ uri: "https://picsum.photos/id/237/200/300" }}
              resizeMode="cover"
            />
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Follow requests</Text>
              <Text style={{ fontWeight: "100" }}>
                Approve or reject requests
              </Text>
            </View>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>This Month</Text>
          </View>
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="username, who might you might know, is on social media"
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="username, who might you might know, is on social media"
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="username, who might you might know, is on social media"
            buttonText="Follow"
          />
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Today</Text>
          </View>
          <Following
            imageUri="https://picsum.photos/id/237/200/300"
            text="username, username and 10 others started following you"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="username, who might you might know, is on social media"
            buttonText="Follow"
          />
          <Comments
            imageUri="https://picsum.photos/id/237/200/300"
            myImageUri="https://picsum.photos/id/237/200/300"
            text="username, who might you might know, is on social media"
          />
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Previous</Text>
          </View>
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="username, who might you might know, is on social media"
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="username, who might you might know, is on social media"
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="username, who might you might know, is on social media"
            buttonText="Follow"
          />
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Suggestions</Text>
          </View>
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="username, who might you might know, is on social media"
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="username, who might you might know, is on social media"
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="username, who might you might know, is on social media"
            buttonText="Follow"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

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
  request: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 10,
  },
  following: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
    justifyContent: "space-evenly",
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
