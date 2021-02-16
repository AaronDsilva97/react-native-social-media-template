import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
const Detail = () => {
  const { count } = useSelector((state) => state.counter);
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Text>{count}</Text>
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
