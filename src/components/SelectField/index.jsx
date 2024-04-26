import { MenuItem, Select } from "@mui/material";

function SelectField({ value, onChange, register }) {
  return (
    <Select
      {...register("gender")}
      labelId="gender-select-label"
      id="gender-select"
      value={value}
      onChange={onChange}
    >
      <MenuItem value="Feminino">Feminino</MenuItem>
      <MenuItem value="Masculino">Masculino</MenuItem>
      <MenuItem value="Nao Binario">Não Binário</MenuItem>
    </Select>
  );
}

export default SelectField;
