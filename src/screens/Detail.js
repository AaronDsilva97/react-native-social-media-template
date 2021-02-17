import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
const Detail = () => {
  const { count } = useSelector((state) => state.counter);
  const { color } = useSelector((state) => state.theme);
  return (
    <View style={[styles.container, { backgroundColor: color.background }]}>
      <Text style={{ color: color.on_background }}>Detail Screen</Text>
      <Text style={{ color: color.on_background }}>{count}</Text>
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
