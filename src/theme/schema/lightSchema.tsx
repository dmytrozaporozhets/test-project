import { Colors } from "../Colors";

interface SchemaProps {
  value?: string | undefined | null;
  error?: string | undefined | null;
}

export const lightSchema = ({ value, error }: SchemaProps) => {
  return {
    labelColor: Colors.greyness[500],
    valueColor: Colors.neutrals[600],
    itemColor: error
      ? Colors.danger[500]
      : value
        ? Colors.neutrals[600]
        : Colors.greyness[500],
    iconColor: Colors.neutrals[600],
    bc: error
      ? Colors.danger[500]
      : value
        ? Colors.neutrals[600]
        : Colors.neutrals[600],
    bg: Colors.neutrals.white,
  };
};
