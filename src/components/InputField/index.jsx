import { TextField } from "@mui/material";

function InputField({
  register,
  name,
  label,
  type,
  className,
  errors,
  rules,
  onBlur,
  value,
}) {
  return (
    <TextField
      {...register(name, rules)}
      className={className}
      label={label}
      type={type}
      onBlur={onBlur}
      value={value}
      variant="outlined"
      error={!!errors[name]}
      helperText={errors[name] ? errors[name].message : ""}
    />
  );
}

export default InputField;
