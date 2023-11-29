import { contentSize, schemaType } from "../../contants/enum";
import { ButtonSizeType, ButtonType } from "../../types/components/button";
import { Colors } from "../Colors";

export const HandlerButtonTheme = (props: {
  type?: ButtonType | string | undefined;
  disabled?: boolean;
}) => {
  const { type, disabled } = props;

  if (disabled) {
    return {
      bg: Colors.greyness[200],
      titleColor: Colors.neutrals.white,
    };
  }
  switch (type) {
    case schemaType.PRIMARY:
      return {
        bg: Colors.primary[500],
        titleColor: Colors.neutrals.white,
      };
    case schemaType.SECONDARY:
      return {
        bg: Colors.secondary[500],
        titleColor: Colors.neutrals.white,
      };
    case schemaType.LIGHT:
      return {
        bg: Colors.neutrals.white,
        titleColor: Colors.neutrals[600],
      };
    case schemaType.DARK:
      return {
        bg: Colors.neutrals[500],
        titleColor: Colors.neutrals.white,
      };
    case schemaType.DANGER:
      return {
        bg: Colors.danger[500],
        titleColor: Colors.neutrals.white,
      };
    case schemaType.OUTLINE_DARK:
      return {
        bg: Colors.neutrals[600],
        titleColor: Colors.neutrals.white,
        bc: Colors.neutrals.white,
        bw: 1,
      };
    default:
      return {
        bg: Colors.primary[500],
        titleColor: Colors.neutrals.white,
      };
  }
};

const buttonStyle: ButtonSizeType = {
  xs: {
    containerStyle: { height: 30, width: "25%" },
    textStyle: { fontSize: 12 },
  },
  s: {
    containerStyle: { height: 40, width: "40%" },
    textStyle: { fontSize: 13 },
  },
  m: {
    containerStyle: { height: 40, width: "45%" },
    textStyle: { fontSize: 13 },
  },
  l: {
    containerStyle: { height: 40, width: "50%" },
    textStyle: { fontSize: 14 },
  },
  xl: {
    containerStyle: { height: 40, width: "75%" },
    textStyle: { fontSize: 16 },
  },
  xxl: {
    containerStyle: { height: 50, width: "100%" },
    textStyle: { fontSize: 18 },
  },
};

export const HandlerButtonSize = (size?: string | undefined) => {
  switch (size) {
    case contentSize.XS:
      return buttonStyle.xs;
    case contentSize.S:
      return buttonStyle.s;
    case contentSize.M:
      return buttonStyle.m;
    case contentSize.L:
      return buttonStyle.l;
    case contentSize.XL:
      return buttonStyle.xl;
    case contentSize.XXL:
      return buttonStyle.xxl;
    default:
      return buttonStyle.xxl;
  }
};
