import { memo } from "react";
import Animated from "react-native-reanimated";
import { Text } from "react-native";

import { Colors } from "../../theme/Colors";

interface InputLabelProps {
  label: string;
  isRequired?: boolean;
  style?: object;
}

const LabelStyle = {
  text: {
    color: Colors.greyness[500],
    position: "absolute",
    fontSize: 16,
    flex: 1,
  },
};

export const Label = memo(
  ({ label, isRequired, style, ...restProps }: InputLabelProps) => {
    return (
      <Animated.Text style={[LabelStyle.text, style]} {...restProps}>
        {label}&nbsp;
        {isRequired ? (
          <Text style={[LabelStyle.text, { color: Colors.danger[500] }]}>
            *
          </Text>
        ) : (
          ""
        )}
      </Animated.Text>
    );
  },
);
