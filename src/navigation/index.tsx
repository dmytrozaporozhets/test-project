import { NavigationContainer } from "@react-navigation/native";
import SignIn from "../screens/SignIn";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Settings from "../screens/Settings";
import { BottomTabBar } from "../components/bars/BottomTabBar";

const RootStack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={Routes.SIGN_IN}
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="SIGN_IN" component={SignIn} />
        <RootStack.Screen name="BOTTOM_TAB_BAR" component={BottomTabBar} />
        <RootStack.Screen name="SETTINGS" component={Settings} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
