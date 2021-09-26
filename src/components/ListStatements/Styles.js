import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height: 0.635 * height,
    width: "100%",
    alignSelf: "center",
    paddingLeft: "5%"
  },

  textDay: {
    fontSize: 0.022 * height,
    color: "#707070",
    marginTop: 0.04 * height,
    marginVertical: 0.015 * height
  },

  listItem: {
    height: 0.075 * height,
    width: width,
    flexDirection: "row",
    alignItems: "center"
  },

  viewDescription: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 0.82 * width,
    paddingRight: "10%"
  },

  imageItem: {
    height: 0.12 * width,
    width: 0.12 * width,
    marginHorizontal: 0.03 * width
  },

  textTitle: {
    fontSize: 0.0175 * height,
    color: "#707070"
  },

  textSubtitle: {
    fontSize: 0.014 * height,
    color: "#707070"
  },

  textAmount: {
    fontSize: 0.019 * height,
    textAlign: "right"
  }
});
