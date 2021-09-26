import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  animatedView: {
    height: 0.1 * height,
    width: 0.1 * height,
    position: "absolute",
    bottom: 0.0505 * height,
    alignSelf: "center"
  },

  button: {
    alignSelf: "center",
    backgroundColor: "#2b2b2b",
    borderRadius: 1000,
    alignItems: "center",
    padding: "20%",
    justifyContent: "center"
  },

  image: {
    resizeMode: "contain"
  },

  textButton: {
    color: "white",
    textAlign: "center",
    marginTop: 0.008 * height,
    opacity: 1
  }
});
