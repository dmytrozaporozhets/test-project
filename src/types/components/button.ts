export type ButtonType =
  | "primary"
  | "secondary"
  | "light"
  | "dark"
  | "danger"
  | "outline-dark"
  | "outline-light";

export type ButtonSize = "xs" | "s" | "m" | "l" | "xl" | "xxl";

export type ButtonStyleType = {
  container: {
    alignItems?: string;
    borderRadius?: number;
    flexDirection?: string;
    justifyContent?: string;
  };
  text: { textAlign?: string; fontWeight?: string };
};

export type SizeType = {
  containerStyle: { width: string; height: number };
  textStyle: { fontSize: number };
};

export type ButtonSizeType = {
  xs: SizeType;
  s: SizeType;
  m: SizeType;
  l: SizeType;
  xl: SizeType;
  xxl: SizeType;
};
