import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate("Detail")}
      >
        <Text>Go to Detail Page</Text>
      </TouchableHighlight>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#aaa",
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
});
