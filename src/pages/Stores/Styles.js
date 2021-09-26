import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    bottom: "100%",
    width,
    height
  }
});
