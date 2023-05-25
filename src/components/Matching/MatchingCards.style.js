import { StyleSheet } from "react-native";
import { FONT } from "../../constants/theme";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  actionsContainer: {
    flex: 0.18,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },

  btn: {
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    // Drop Shadow
    shadowRadius: 4,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    elevation: 6,
  },

  text: {
    fontFamily: FONT.boldFont,
    fontSize: 16,
  },
});
