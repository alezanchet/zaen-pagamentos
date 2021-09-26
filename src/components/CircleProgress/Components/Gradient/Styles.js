import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  viewCircle: {
    position: "absolute",
    top: "14%",
    alignSelf: "center",
    height: 0.32 * height,
    width: 0.32 * height,
    borderRadius: 0.16 * height
  },

  gradientCircle: {
    height: 0.32 * height,
    width: 0.32 * height,
    borderRadius: 0.16 * height,
    justifyContent: "space-between",
    padding: "10%",
    alignItems: "center"
  },

  textName: {
    fontSize: 0.022 * height,
    fontWeight: "300",
    color: "#00aab3"
  },

  textBalance: {
    fontSize: 0.035 * height,
    color: "white",
    textAlign: "center"
  },

  textPoints: {
    fontSize: 0.022 * height,
    textAlign: "center",
    color: "#00aab3"
  }
});
