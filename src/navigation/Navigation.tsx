import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Routes from "./Routes";
import SignIn from "../screens/SignIn";

const RootStack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Routes.SIGN_IN}>
        <RootStack.Screen name="SIGN_IN" component={SignIn} />
        <RootStack.Screen name="HOME" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
