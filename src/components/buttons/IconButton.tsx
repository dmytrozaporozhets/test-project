import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { TouchableOpacity } from "react-native";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const IconButtonStyle = {
  wrapper: { alignItems: "center", justifyContent: "center" },
};

export const IconButton = memo(({ icon, color, size, ...props }: IconProp) => {
  return (
    <TouchableOpacity style={IconButtonStyle.wrapper} {...props}>
      <FontAwesomeIcon icon={icon} color={color} size={size} />
    </TouchableOpacity>
  );
});
