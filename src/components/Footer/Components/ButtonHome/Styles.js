import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  buttonFooter: {
    height: "100%",
    width: "25%",
    justifyContent: "center",
    alignItems: "center"
  },

  imageHome: {
    height: "50%",
    resizeMode: "contain"
  }
});
