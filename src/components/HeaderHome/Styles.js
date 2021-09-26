import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a"
  },

  viewSuperior: {
    height: "15%",
    width: "85%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10
  },

  imageAvatar: {
    height: 0.08 * height,
    width: 0.08 * height,
    borderRadius: 0.04 * height
  },

  touchableStore: {
    height: 0.04 * height,
    width: 0.04 * height,
    justifyContent: "center",
    alignItems: "center"
  },

  imageStore: {
    height: "100%",
    width: "100%"
  }
});
