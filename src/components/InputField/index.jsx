import { TextField } from "@mui/material";

function InputField({ register, name, label, type, className, errors, rules }) {
  return (
    <TextField
      {...register(name, rules)}
      className={className}
      label={label}
      type={type}
      variant="outlined"
      error={!!errors[name]}
      helperText={errors[name] ? errors[name].message : ""}
    />
  );
}

export default InputField;
