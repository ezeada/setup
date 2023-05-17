import styles from "./HeaderLogo.style";
import { View, Text } from "react-native";
const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Setup</Text>
    </View>
  );
};

export default HeaderLogo;
