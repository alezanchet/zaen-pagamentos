import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  animatedQRcode: {
    position: "absolute",
    alignSelf: "center",
    bottom: 0.0625 * height
  },

  image: {
    height: 0.08 * height,
    width: 0.08 * height,
    resizeMode: "contain"
  }
});
