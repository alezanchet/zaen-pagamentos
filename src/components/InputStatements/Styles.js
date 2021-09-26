import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  viewInput: {
    height: 0.06 * height,
    marginTop: 0.27 * height,
    alignSelf: "center",
    borderRadius: 0.015 * height,
    width: "90%",
    backgroundColor: "#2b2b2b",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 6
  },

  inputMovimentacoes: {
    color: "#707070",
    width: "80%",
    height: "100%",
    fontSize: 0.02 * height
  },

  textMovimentacoes: {
    color: "#707070",
    fontSize: 0.02 * height
  },

  imageLupa: {
    width: "10%"
  }
});
