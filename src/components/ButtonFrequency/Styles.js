import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  buttonFrequency: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    left: "3%",
    height: height * 0.05,
    width: 0.35 * width,
    paddingHorizontal: 0.04 * width
  },

  viewOverlayFrequency: {
    left: 0.03 * width,
    position: "absolute",
    top: 0,
    width: 0.35 * width
  },

  gradientOverlay: {
    height: "100%",
    width: "100%",
    borderRadius: 0.02 * height
  },

  scrollView: {
    marginTop: "25%",
    height: "75%",
    width: "100%",
    paddingLeft: "13%"
  },

  textSemanal: {
    fontSize: 0.02 * height,
    color: "white",
    marginRight: 0.03 * width
  },

  textMensal: {
    fontSize: 0.02 * height,
    color: "#707070",
    marginRight: 0.03 * width,
    marginTop: 0.018 * height
  },

  imageArrow: {
    height: 0.01 * height
  }
});
