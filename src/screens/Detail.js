import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
