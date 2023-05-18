import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FONT } from "../constants/theme";
import HeaderLogo from "../components/UI/HeaderLogo";
import MatchingCards from "../components/Matching/MatchingCards";
import MatchingActions from "../components/Matching/MatchingActions";
const MatchmakingScreen = () => {
  const nextPerson = () => {};
  return (
    <>
      <HeaderLogo />
      <View
        style={{
          paddingHorizontal: 8,
          flex: 1,
          justifyContent: "center",
          gap: 20,
        }}
      >
        <MatchingCards />
        <MatchingActions />
      </View>
    </>
  );
};

// create two buttons, one with first user, and second loops through everyone in your friends
// and every time it is clicked, it flips to the next user that fits requirements
// or else it's like "no people left"
// if next person is swiped, then it notes

export default MatchmakingScreen;
