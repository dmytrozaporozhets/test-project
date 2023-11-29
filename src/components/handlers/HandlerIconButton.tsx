import { memo, useCallback } from "react";
import { ActionButtonType } from "../../contants/enum";
import { IconButton } from "../buttons/IconButton";
import { View } from "react-native";
import { icons } from "../../contants/icons";

type HandlerIconButtonType = "close";

interface HandlerIconButtonProps {
  value?: string | undefined;
  editable?: boolean | undefined;
  type?: HandlerIconButtonType | undefined;
  onAction: () => void;
  iconColor?: string;
}

const HandlerIconButtonStyle = {
  dimensions: {
    width: 20,
    height: 20,
  },
};

export const HandlerIconButton = memo((props: HandlerIconButtonProps) => {
  const { value, type, onAction, editable, iconColor, ...restProps } = props;

  const renderContent = useCallback(() => {
    switch (type) {
      case ActionButtonType.CLOSE: {
        return value && editable ? (
          <IconButton
            icon={icons.close}
            onPress={onAction}
            color={iconColor}
            style={HandlerIconButtonStyle.dimensions}
          />
        ) : null;
      }
      default:
        return null;
    }
  }, [type, onAction, iconColor]);

  return <View {...restProps}>{renderContent()}</View>;
});
