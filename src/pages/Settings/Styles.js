import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#1a1a1a",
    left: 0,
    width,
    height
  }
});
