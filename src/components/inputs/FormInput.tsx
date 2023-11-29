import { memo } from "react";
import { Controller } from "react-hook-form";

import { TextInput, TextInputProps } from "./TextInput";

export const FormInput = memo((props: TextInputProps) => {
  const { name, control, rules, error, label, ...restProps } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          label={label}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={error}
          {...restProps}
        />
      )}
    />
  );
});
