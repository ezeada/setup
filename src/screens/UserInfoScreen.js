import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import testData from "../assets/testData";
import HeaderLogo from "../components/UI/HeaderLogo";
const UserInfoScreen = () => {
  const user = testData;
  return (
    <>
      <HeaderLogo />
      <ScrollView style={styles.container}>
        <Text>
          UserInfo would be added on this screen -- I've autoadded it for
          simplicity{" "}
        </Text>
      </ScrollView>
    </>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
