import styles from "./MatchingCards.style";
import { View, ImageBackground, Text, Animated } from "react-native";
const MatchingCards = () => {
  const DUMMY_DATA = {};
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImgWrapper}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.cardImg}
        >
          <View style={styles.cardInfo}>
            <Text style={styles.cardInfoName}>Maddie, 28</Text>
            <Text style={styles.cardInfoLocation}>Bay Area, CA</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.cardImgWrapper}>
        <ImageBackground
          source={require("../../assets/images/sample-user2.jpg")}
          style={styles.cardImg}
        >
          <View style={styles.cardInfo}>
            <Text style={styles.cardInfoName}>Sean, 28</Text>
            <Text style={styles.cardInfoLocation}>Palo Alto, CA</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default MatchingCards;
