import { MenuItem, Select } from "@mui/material";

function SelectField({ value, onChange, register, label, options }) {
  return (
    <Select
      {...register("gender")}
      labelId="gender-select-label"
      label={label}
      id="gender-select"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default SelectField;
