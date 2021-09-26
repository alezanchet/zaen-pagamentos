import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  animatedView: {
    position: "absolute",
    alignSelf: "center",
    borderRadius: 1000,
    backgroundColor: "#2b2b2b",
    height: 0.05 * height,
    alignItems: "center",
    justifyContent: "center",
    width: 0.05 * height,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6
  },

  buttonBack: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});
