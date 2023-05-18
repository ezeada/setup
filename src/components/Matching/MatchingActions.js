import { Text, View, Pressable, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useState } from "react";
import styles from "./MatchingActions.style";
const MatchingActions = () => {
  const [isLockedLeft, setIsLockedLeft] = useState(true);
  const [isLockedRight, setIsLockedRight] = useState(true);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.lockBtn}
        onPress={() =>
          setIsLockedLeft((prevState) => {
            if (isLockedLeft) setIsLockedRight(true);
            return !prevState;
          })
        }
      >
        <Icon
          name={isLockedLeft ? "lock" : "lock-open"}
          size={24}
          style={styles.lockedIcon(isLockedLeft)}
        />
      </Pressable>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Set-up</Text>
      </TouchableOpacity>

      <Pressable
        style={styles.lockBtn}
        onPress={() =>
          setIsLockedRight((prevState) => {
            if (isLockedRight) setIsLockedLeft(true);
            return !prevState;
          })
        }
      >
        <Icon
          name={isLockedRight ? "lock" : "lock-open"}
          size={24}
          style={styles.lockedIcon(isLockedRight)}
        />
      </Pressable>
    </View>
  );
};

export default MatchingActions;
