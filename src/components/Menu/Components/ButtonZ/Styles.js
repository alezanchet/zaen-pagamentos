import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  animatedZaen: {
    position: "absolute",
    bottom: 0.065 * height,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.61,
    shadowRadius: 10
  },

  gradientZaen: {
    height: 0.09 * height,
    width: 0.09 * height,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0.045 * height
  },

  imageZ: {
    height: "75%"
  }
});
