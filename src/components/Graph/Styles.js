import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height: 0.25 * height,
    width,
    position: "absolute"
  },

  viewSuperior: {
    height: "20%",
    width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "6%"
  },

  textReceita: {
    fontSize: 0.015 * height,
    color: "#51B99C"
  },

  ball: {
    height: 0.01 * height,
    width: 0.01 * height,
    borderRadius: 0.005 * height,
    backgroundColor: "#51B99C",
    marginRight: 0.01 * width,
    marginLeft: 0.05 * width
  },

  viewColumns: {
    height: "70%",
    width,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  column: {
    height: "90%",
    width: 0.0075 * width,
    backgroundColor: "#2B2B2B",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  columnGreen: {
    width: "100%",
    backgroundColor: "#51B99C",
    borderRadius: 20,
    position: "absolute",
    bottom: 0
  },

  columnRed: {
    width: "100%",
    backgroundColor: "#EA2867",
    borderRadius: 20,
    position: "absolute",
    bottom: 0
  },

  viewDays: {
    height: "10%",
    width,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  textDay: {
    fontSize: 0.018 * height
  }
});
