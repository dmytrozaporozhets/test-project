import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";

const RootStack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={Routes.SIGN_IN}
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="SIGN_IN" component={SignIn} />
        <RootStack.Screen name="HOME" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
