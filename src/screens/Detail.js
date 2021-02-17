import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Color } from "../theme";
const Detail = () => {
  const { count } = useSelector((state) => state.counter);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.background,
  },
  text: {
    color: Color.on_background,
  },
});
