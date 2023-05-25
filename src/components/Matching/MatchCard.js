import { useRef, useEffect } from "react";

import styles from "./MatchCard.style";
import { View, ImageBackground, Text } from "react-native";

const MatchCard = ({ img, firstName, age }) => {
  return (
    <View
      style={styles.cardContainer}
      // Add touch responder to this component
    >
      <ImageBackground
        source={{
          uri: img,
        }}
        style={styles.cardImg}
      >
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoName}>{`${firstName}, ${age}`}</Text>
          <Text style={styles.cardInfoLocation}>Bay Area, CA</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MatchCard;
