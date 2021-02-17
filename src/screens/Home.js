import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Switch,
} from "react-native";
import { increment, decrement } from "../store/action/Counter";
import { toggle_theme } from "../store/action/Theme";
import { useSelector, useDispatch } from "react-redux";

const Home = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    dispatch(toggle_theme(isEnabled));
  };

  const { count } = useSelector((state) => state.counter);
  const { color } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <View style={[styles.container, { backgroundColor: color.background }]}>
      <TouchableHighlight
        style={[styles.button, { backgroundColor: color.surface }]}
        onPress={() => navigation.navigate("Detail")}
      >
        <Text style={{ color: color.on_surface }}>Go to Detail Page</Text>
      </TouchableHighlight>
      <Text style={{ color: color.on_surface }}>Home Screen</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: color.primary }]}
          onPress={() => dispatch(decrement())}
        >
          <Text style={{ color: color.on_primary }}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={{ color: color.on_surface }}>{count}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: color.primary }]}
          onPress={() => dispatch(increment())}
        >
          <Text style={{ color: color.on_primary }}>+</Text>
        </TouchableHighlight>
      </View>
      <Switch
        trackColor={{ false: color.on_surface, true: color.surface }}
        thumbColor={isEnabled ? color.secondary : color.primary}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
    padding: 20,
    borderRadius: 20,
    margin: 10,
    elevation: 12,
  },
});
