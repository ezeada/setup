import styles from "./MatchingCards.style";
import { View, Image } from "react-native";
const MatchingCards = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImgWrapper}>
        <Image
          source={require("../../assets/images/sample-user.jpg")}
          resizeMode="stretch"
          style={styles.cardImg}
        />
      </View>
      <View style={styles.cardImgWrapper}>
        <Image
          source={require("../../assets/images/sample-user2.jpg")}
          resizeMode="stretch"
          style={styles.cardImg}
        />
      </View>
    </View>
  );
};

export default MatchingCards;
