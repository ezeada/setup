import { StyleSheet } from "react-native";
import { FONT } from "../../constants/theme";
export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    // paddingVertical: 14,
  },

  logoText: {
    color: "#000",
    fontSize: 36,
    fontFamily: FONT.logoFont,
  },
});
