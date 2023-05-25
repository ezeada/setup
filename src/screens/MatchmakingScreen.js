import { Text, View } from "react-native";
import HeaderLogo from "../components/UI/HeaderLogo";
import MatchingCards from "../components/Matching/MatchingCards";

const MatchmakingScreen = () => {
  return (
    <>
      <HeaderLogo />
      <View
        style={{
          paddingHorizontal: 4,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <MatchingCards />
      </View>
    </>
  );
};

// create two buttons, one with first user, and second loops through everyone in your friends
// and every time it is clicked, it flips to the next user that fits requirements
// or else it's like "no people left"
// if next person is swiped, then it notes

export default MatchmakingScreen;
