import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { memo } from "react";
import { TranslationProps, useTranslation } from "react-i18next";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import { CustomBottomBar } from "./CustomBottomBar";

const Tab = createBottomTabNavigator();

export const BottomTabBar = memo(({ ...restProps }) => {
  const { t }: TranslationProps = useTranslation("tabs");
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomBottomBar {...props} />}
      {...restProps}
    >
      <Tab.Screen name={t("home")} component={Home} />
      <Tab.Screen name={t("profile")} component={Profile} />
    </Tab.Navigator>
  );
});
