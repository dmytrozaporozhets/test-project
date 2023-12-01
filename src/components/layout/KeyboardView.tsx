import { useHeaderHeight } from "@react-navigation/elements";
import { memo, PropsWithChildren } from "react";
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
} from "react-native";

import { IS_IOS } from "../../utils/intro";

type KeyboardAvoidingViewProps =
  PropsWithChildren<RNKeyboardAvoidingViewProps> & {
    handleHeader?: boolean;
    customHeaderHeight?: number;
  };

const KeyboardViewStyle = {
  container: {
    flex: 1,
    width: "100%",
  },
};

export const KeyboardView = memo(
  ({ handleHeader, ...props }: KeyboardAvoidingViewProps) => {
    const headerHeight = useHeaderHeight();

    return (
      <KeyboardAvoidingView
        enabled={IS_IOS}
        behavior="padding"
        keyboardVerticalOffset={
          handleHeader ? headerHeight || props?.customHeaderHeight : 0
        }
        style={KeyboardViewStyle.container}
        {...props}
      />
    );
  },
);
