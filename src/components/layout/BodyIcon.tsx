import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const BodyIcon = memo(({ icon, color, size, ...props }: IconProp) => {
  return <FontAwesomeIcon icon={icon} color={color} size={size} {...props} />;
});
