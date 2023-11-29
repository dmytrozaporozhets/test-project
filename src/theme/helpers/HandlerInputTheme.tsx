import { schemaType } from "../../contants/enum";
import { lightSchema, darkSchema } from "../schema";

export type InputType = "light" | "dark";

export interface HandlerInputTypeProps {
  value?: string | undefined | null;
  type?: InputType | string | undefined | null;
  error?: string | undefined | null;
}

export const HandlerInputTheme = (props: HandlerInputTypeProps) => {
  const { type, value, error } = props;
  switch (type) {
    case schemaType.LIGHT:
      return lightSchema({ value, error });
    case schemaType.DARK: {
      return darkSchema({ value, error });
    }
    default: {
      return lightSchema({ value, error });
    }
  }
};
