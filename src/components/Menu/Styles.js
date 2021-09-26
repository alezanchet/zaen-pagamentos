import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  viewGradient: {
    position: "absolute",
    height,
    width
  },

  gradientMenu: {
    height: "100%",
    width: "100%"
  }
});
