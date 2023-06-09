import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../constants/theme";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textLogo: {
    color: COLORS.black,
    fontSize: 96,
    fontFamily: FONT.logoFont,
  },
  motto: {
    marginTop: -8,
    fontSize: 24,
    fontFamily: FONT.mottoFont,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#D29F6C",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  secondaryBtn: {
    backgroundColor: "#AEAEB2",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#AEAEB2",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
