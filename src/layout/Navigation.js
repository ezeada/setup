import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import MatchmakingScreen from "../screens/MatchmakingScreen";
import UserInfoScreen from "../screens/UserInfoScreen";
import ContactsScreen from "../screens/ContactsScreen";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const Tab = createBottomTabNavigator();

  // Override background variable from default theme
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  return (
    <>
      <NavigationContainer theme={navTheme}>
        <Tab.Navigator
          initialRouteName="Info"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#000",
            },
            tabBarIcon: ({ focused }) => {
              let iconName;
              switch (route.name) {
                case "Home":
                  iconName = "home-circle";
                  break;
                case "Contacts":
                  iconName = "contacts";
                  break;
                case "Info":
                  iconName = "account-circle";
                  break;
                case "Match":
                  iconName = "cards-playing-heart-multiple";
                  break;
              }
              return (
                <Icon
                  name={iconName}
                  size={30}
                  color={focused ? "#fff" : "#AEAEB2"}
                />
              );
            },
            tabBarLabelStyle: {
              display: "none",
            },
          })}
        >
          <Tab.Screen name="Info" component={UserInfoScreen} />
          <Tab.Screen name="Match" component={MatchmakingScreen} />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen name="Contacts" component={ContactsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
