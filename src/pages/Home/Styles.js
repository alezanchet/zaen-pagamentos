import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a"
  },

  touchableDismiss: {
    width,
    marginBottom: 0.04 * height
  },

  viewStatements: {
    height,
    position: "absolute",
    width,
    backgroundColor: "#1a1a1a",
    top: "49%"
  }
});
