import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  bar: {
    position: "absolute",
    bottom: 0,
    width: 0.12 * width,
    height: 0.004 * height,
    borderRadius: 0.002 * height,
    backgroundColor: "#00aab3"
  }
});
