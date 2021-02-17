import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { increment, decrement } from "../store/action/Counter_Action";
import { useSelector, useDispatch } from "react-redux";
import { Color } from "../theme";
const Home = ({ navigation }) => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate("Detail")}
      >
        <Text style={styles.buttonText}>Go to Detail Page</Text>
      </TouchableHighlight>
      <Text style={styles.buttonText}>Home Screen</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.buttonText}>{count}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.background,
  },
  button: {
    backgroundColor: Color.surface,
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    color: Color.on_surface,
  },
});
