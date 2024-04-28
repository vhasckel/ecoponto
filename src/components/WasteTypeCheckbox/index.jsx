import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { checkboxesData } from "../../utils/selectOptions";

function WasteTypeCheckbox({
  register,
  selectedCheckboxes,
  handleCheckboxChange,
  formSubmitted,
  rules,
}) {
  return (
    <div>
      <FormGroup>
        {checkboxesData.map((checkbox) => (
          <FormControlLabel
            {...register(checkbox.name, rules)}
            key={checkbox.name}
            control={
              <Checkbox
                name={checkbox.name}
                checked={!!selectedCheckboxes[checkbox.name]}
                onChange={handleCheckboxChange}
              />
            }
            label={checkbox.label}
          />
        ))}
      </FormGroup>
      {formSubmitted &&
        Object.values(selectedCheckboxes).filter(Boolean).length === 0 && (
          <FormHelperText>
            Por favor, selecione pelo menos um tipo de resíduo.
          </FormHelperText>
        )}
    </div>
  );
}
export default WasteTypeCheckbox;
