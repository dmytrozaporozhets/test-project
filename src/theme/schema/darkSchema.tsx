import { Colors } from "../Colors";

interface SchemaProps {
  value?: string | undefined | null;
  error?: string | undefined | null;
}

export const darkSchema = ({ value, error }: SchemaProps) => {
  return {
    labelColor: Colors.greyness[500],
    valueColor: Colors.neutrals.white,
    itemColor: error
      ? Colors.danger[500]
      : value
        ? Colors.neutrals.white
        : Colors.greyness[500],
    iconColor: Colors.neutrals.white,
    bc: error
      ? Colors.danger[500]
      : value
        ? Colors.neutrals.white
        : Colors.neutrals.white,
    bg: Colors.neutrals[600],
  };
};
