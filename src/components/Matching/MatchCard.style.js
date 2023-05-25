import { StyleSheet, Dimensions } from "react-native";
import { FONT } from "../../constants/theme";
const HEIGHT_SCROLL = Dimensions.get("screen").height * 0.9 - 20 - 50 - 65;
const cardHeight = HEIGHT_SCROLL * 0.85;

export default StyleSheet.create({
  cardContainer: {
    borderRadius: 18,
    overflow: "hidden",
    height: "100%",
    backgroundColor: "black",
  },

  cardImg: {
    height: "100%",
  },

  cardInfo: {
    marginTop: "auto",
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "20%",
    padding: 14,
    gap: 5,
  },
  cardInfoName: {
    color: "#fff",
    fontSize: 16,
    fontFamily: FONT.semiBoldFont,
  },
  cardInfoLocation: {
    color: "#fff",
    fontFamily: FONT.mottoFont,
    fontSize: 10,
  },
});
