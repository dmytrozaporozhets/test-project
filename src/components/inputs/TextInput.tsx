import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import {
  StyleProp,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  ViewStyle,
  TouchableOpacity,
  View,
} from "react-native";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { InputType } from "../../theme/helpers/HandlerInputTheme";
import { IconButton } from "../buttons/IconButton";
import { InputButtonHandler } from "../handlers/InputButtonHandler";
import { ErrorMessage } from "../elements/ErrorMessage";
import { Colors } from "../../theme/Colors";
import { Label } from "../elements/Label";
import { icons } from "../../assets/icons";
import { HandlerInputTheme } from "../../theme/helpers/HandlerInputTheme";

export type TextInputProps = RNTextInputProps & {
  label: string;
  error?: string | undefined | null;
  onGainedFocus?: () => void;
  onBlur?: () => void;
  onPress?: () => void;
  securedEntry?: boolean;
  type?: InputType | string | undefined;
  onRightPress?: () => void;
  rightIcon?: "close" | undefined;
};

const TextInputStyle = {
  wrapper: {
    borderRadius: 12,
    height: 60,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    height: 60,
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 20,
    flex: 1,
    fontSize: 16,
  },
};

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  (
    {
      label,
      error,
      editable = true,
      onChangeText,
      value,
      onGainedFocus,
      onBlur,
      onPress,
      securedEntry = false,
      type,
      rightIcon,
      onRightPress,
      style,
      ...restProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(!!securedEntry);

    const { labelColor, valueColor, iconColor, bc, bg } = HandlerInputTheme({
      type,
      value,
      error,
    });

    const togglePasswordVisibility = useCallback(
      () => setPasswordVisible(!isPasswordVisible),
      [isPasswordVisible],
    );

    const offset = useSharedValue(value ? 1 : 0);

    const handleFocus = useCallback(() => {
      offset.value = !value ? 1 : withTiming(0);

      if (onGainedFocus) {
        onGainedFocus();
      }
      setIsFocused(true);
    }, [value, onGainedFocus, offset]);

    const handleBlur = useCallback(() => {
      offset.value = value ? 1 : withTiming(0);

      if (onBlur) {
        onBlur();
      }
      setIsFocused(false);
    }, [value, onBlur, offset]);

    useEffect(() => {
      if (!isFocused && !value) {
        offset.value = 0;
      } else {
        offset.value = 1;
      }
    }, [value, isFocused, offset]);

    const mergedStyle = useMemo<StyleProp<ViewStyle>>(() => {
      if (!editable) {
        return [{ opacity: 0.5 }, style];
      }

      return style;
    }, [editable, style]);

    const labelStyle = useAnimatedStyle(
      () => ({
        top: withTiming(interpolate(offset.value, [0, 1], [20, 5])),
        fontSize: withTiming(interpolate(offset.value, [0, 1], [16, 12])),
        color: isFocused ? Colors.primary[500] : labelColor,
        marginLeft: 20,
      }),
      [isFocused],
    );
    return (
      <View style={mergedStyle}>
        <TouchableOpacity disabled={!onPress} onPress={onPress}>
          <View
            style={[
              TextInputStyle.wrapper,
              {
                backgroundColor: bg,
                borderColor: isFocused ? Colors.primary[500] : bc,
              },
            ]}
          >
            {label ? <Label label={label} style={labelStyle} /> : null}
            <RNTextInput
              editable={editable}
              value={value}
              autoCorrect={false}
              testID={label}
              onChangeText={onChangeText}
              ref={ref}
              onBlur={handleBlur}
              onFocus={handleFocus}
              autoCapitalize="none"
              secureTextEntry={isPasswordVisible}
              placeholderTextColor={Colors.greyness[500]}
              selectionColor={Colors.neutrals[500]}
              style={[TextInputStyle.container, { color: valueColor }]}
              {...restProps}
            />
            {securedEntry && (
              <IconButton
                icon={isPasswordVisible ? icons.eye : icons.eyeSlash}
                onPress={togglePasswordVisibility}
                iconColor={iconColor}
                style={{ marginRight: 10 }}
              />
            )}
            {onRightPress && (
              <InputButtonHandler
                value={value}
                editable={editable}
                onAction={onRightPress}
                type={rightIcon}
                iconColor={iconColor}
                mr="s"
              />
            )}
          </View>
          <ErrorMessage text={error} />
        </TouchableOpacity>
      </View>
    );
  },
);
