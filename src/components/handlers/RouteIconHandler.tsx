import { BodyIcon } from "../layout/BodyIcon";
import { icons } from "../../assets/icons";
import { LabelPosition } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { ReactNode } from "react";

interface RouteIconHandlerProps {
  route:
    | string
    | ((props: {
        focused: boolean;
        color: string;
        position: LabelPosition;
      }) => ReactNode);
  color: string;
}

export const RouteIconHandler = ({ route, color }: RouteIconHandlerProps) => {
  switch (route) {
    case "home": {
      return <BodyIcon icon={icons.home} size={20} color={color} />;
    }
    case "profile": {
      return <BodyIcon icon={icons.user} size={20} color={color} />;
    }
    default: {
      return <BodyIcon icon={icons.home} size={20} color={color} />;
    }
  }
};
