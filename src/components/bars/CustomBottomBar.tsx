import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { memo, ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from "../../theme/Colors";
import { Text, TouchableOpacity, View } from "react-native";
import { RouteIconHandler } from "../handlers/RouteIconHandler";
import { LabelPosition } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

const CustomBottomBarStyle = {
  tab: {
    flex: 1,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.neutrals[600],
  },
  row: { flexDirection: "row" },
  title: { fontSize: 12, marginTop: 5 },
  indicator: {
    backgroundColor: Colors.info[500],
    height: 2,
    width: "100%",
    position: "absolute",
    top: 0,
  },
};

type labelType =
  | string
  | ((props: {
      focused: boolean;
      color: string;
      position: LabelPosition;
      children: string;
    }) => ReactNode);

export const CustomBottomBar = memo((props: BottomTabBarProps) => {
  const { state, descriptors, navigation } = props;
  const insets = useSafeAreaInsets();

  const focusedOptions: any =
    descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: Colors.neutrals[600],
        paddingBottom: insets.bottom,
      }}
    >
      <View style={CustomBottomBarStyle.row}>
        {state.routes.map((route: object, index) => {
          const { options } = descriptors[route.key];
          const label: labelType =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event: object = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            } as const);

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              key={index}
              style={CustomBottomBarStyle.tab}
              activeOpacity={0.8}
              disabled={isFocused}
            >
              {isFocused ? (
                <View style={CustomBottomBarStyle.indicator} />
              ) : null}
              <RouteIconHandler
                route={label}
                color={isFocused ? Colors.info[500] : Colors.neutrals.white}
              />
              <Text
                style={[
                  CustomBottomBarStyle.title,
                  {
                    fontWeight: isFocused ? "700" : "400",
                    color: isFocused ? Colors.info[500] : Colors.neutrals.white,
                  },
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
});
