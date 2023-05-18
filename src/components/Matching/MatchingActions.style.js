import { StyleSheet } from "react-native";
import { FONT } from "../../constants/theme";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 44,
    paddingVertical: 14,

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
  lockBtn: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

    // Drop Shadow
    shadowRadius: 4,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    elevation: 6,
  },
  lockedIcon: (locked) => {
    return {
      color: locked ? "#AEAEB2" : "#F3C976",
    };
  },
});
