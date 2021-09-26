import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  animatedX: {
    position: "absolute",
    alignSelf: "center"
  },

  buttonX: {
    height: 0.08 * height,
    width: 0.08 * height,
    borderRadius: 0.04 * height,
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00aab3"
  },

  imageX: {
    height: "60%"
  }
});
