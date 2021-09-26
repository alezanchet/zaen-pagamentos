import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },

  viewProgress: {
    position: "absolute",
    backgroundColor: "#1a1a1a",
    top: "13.725%",
    height: 0.325 * height,
    width: 0.325 * height,
    borderRadius: 0.1625 * height,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  }
});
