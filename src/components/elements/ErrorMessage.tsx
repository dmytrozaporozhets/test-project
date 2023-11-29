import { memo } from "react";

import { View, Text } from "react-native";

interface InputErrorProps {
  text?: string | undefined | null;
}

const ErrorMessageStyle = {
  container: { height: 20 },
  text: { marginTop: 5, fontWeight: "bold", color: "red", fontSize: 12 },
};

export const ErrorMessage = memo(({ text, ...restProps }: InputErrorProps) => {
  return (
    <View style={ErrorMessageStyle.container} {...restProps}>
      {!!text && <Text style={ErrorMessageStyle.text}>{text}</Text>}
    </View>
  );
});
