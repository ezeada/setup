import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FONT } from "../constants/theme";
import HeaderLogo from "../components/UI/HeaderLogo";
import MatchingCards from "../components/Matching/MatchingCards";
const MatchmakingScreen = () => {
  const nextPerson = () => {};
  return (
    <>
      <HeaderLogo />
      <View
        style={{
          paddingHorizontal: 14,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <MatchingCards />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Set-up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

// create two buttons, one with first user, and second loops through everyone in your friends
// and every time it is clicked, it flips to the next user that fits requirements
// or else it's like "no people left"
// if next person is swiped, then it notes

export default MatchmakingScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#fff",
    borderRadius: 50,
    alignSelf: "center",
    paddingHorizontal: 44,
    paddingVertical: 12,
    marginTop: 20,
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
