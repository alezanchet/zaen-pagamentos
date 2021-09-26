import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height: 0.1 * height,
    width: 0.9 * width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center"
  },

  image: {
    height: "100%"
  },

  viewLateral: {
    height: "100%",
    width: "25%"
  },

  viewCenter: {
    height: "100%",
    width: "50%",
    justifyContent: "space-evenly",
    alignItems: "center"
  },

  textTitle: {
    fontSize: 0.025 * height,
    color: "white"
  },

  textSubtitle: {
    fontSize: 0.021 * height,
    color: "#707070"
  }
});
