import { useState, useEffect } from "react";
import {
  View,
  Pressable,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from "react-native";
import Animated, {
  Easing,
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import Icon from "react-native-vector-icons/Entypo";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./MatchingCards.style";
import MatchCarousel from "./MatchCarousel";
import testData from "../../assets/testData";

const MatchingCards = () => {
  const SCREEN_WIDTH = useWindowDimensions("screen").width * 0.8;
  const contacts = testData.contacts;
  const [isLockedLeft, setIsLockedLeft] = useState(true);
  const [isLockedRight, setIsLockedRight] = useState(true);
  const handleLockPress = (lock) => {
    lock === "left"
      ? setIsLockedLeft((prevState) => {
          if (isLockedLeft) setIsLockedRight(true);
          return !prevState;
        })
      : setIsLockedRight((prevState) => {
          if (isLockedRight) setIsLockedLeft(true);
          return !prevState;
        });
  };

  const offset = useSharedValue(0);
  const width = useSharedValue("100%");

  useEffect(() => {
    if (isLockedLeft && isLockedRight) {
      width.value = withTiming("100%", {
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      offset.value = withTiming(0, {
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    }

    if (!isLockedLeft) {
      width.value = "180%";
      offset.value = withTiming(0, {
        duration: 0,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    }
    if (!isLockedRight) {
      width.value = "180%";
      offset.value = withTiming(-SCREEN_WIDTH, {
        duration: 0,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    }
  }, [isLockedLeft, isLockedRight]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      transform: [
        {
          translateX: withTiming(offset.value, {
            duration: 300,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          }),
        },
      ],
    };
  });
  return (
    <>
      <Animated.View style={[styles.container, animatedStyles]}>
        <MatchCarousel
          data={contacts}
          handleLockPress={handleLockPress}
          stack={"left"}
        />
        <MatchCarousel
          data={contacts}
          handleLockPress={handleLockPress}
          stack={"right"}
        />
      </Animated.View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log(`Set up!`)}
        >
          <FontAwesome name="search" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log(`Set up!`)}
        >
          <Icon name="thumbs-up" size={30} color={"#F3C976"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log(`Set up!`)}
        >
          <FontAwesome name="search" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MatchingCards;
