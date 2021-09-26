import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    alignItems: "center"
  },

  imageBackground: {
    height: 0.08 * height,
    width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.0005 * height,
    borderBottomColor: "#2b2b2b",
    paddingHorizontal: 0.06 * width
  }
});
