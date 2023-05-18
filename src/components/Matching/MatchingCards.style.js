import { StyleSheet } from "react-native";
import { FONT } from "../../constants/theme";
export default StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    height: "75%",
    width: "100%",
  },

  cardImgWrapper: {
    borderRadius: 18,
    flex: 1,
    height: "100%",
    overflow: "hidden",
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
