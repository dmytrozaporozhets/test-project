import { memo } from "react";

import {
  HandlerButtonSize,
  HandlerButtonTheme,
} from "../../theme/helpers/HandlerButtonTheme";
import { TouchableOpacity, Text, ViewProps, TextProps } from "react-native";
import {
  ButtonSize,
  ButtonStyleType,
  ButtonType,
} from "../../types/components/button";

interface ButtonProps {
  onPress: (data?: null | object) => void;
  title: string;
  disabled?: boolean;
  style?: object;
  type?: ButtonType | string;
  size?: ButtonSize | string;
}

const ButtonStyle: ButtonStyleType = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontWeight: "700",
    textAlign: "center",
  },
};

export const Button = memo(
  ({ onPress, title, disabled = false, type, size, style }: ButtonProps) => {
    const { titleColor, bg, bw, bc } = HandlerButtonTheme({
      type,
      disabled,
    });
    const { containerStyle, textStyle } = HandlerButtonSize(size);

    return (
      <TouchableOpacity
        style={
          [
            ButtonStyle.container,
            containerStyle,
            {
              backgroundColor: bg,
              borderWidth: bw,
              borderColor: bc,
            },
            style,
          ] as ViewProps
        }
        onPress={onPress}
        disabled={disabled}
      >
        <Text
          style={
            [ButtonStyle.text, textStyle, { color: titleColor }] as TextProps
          }
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  },
);
