import { TextField } from "@mui/material";

import "./styles.css";

function CInput({ label, type }) {
  return (
    <TextField
      className="inputRounded"
      id="outline-basic"
      label={label}
      type={type}
      variant="outlined"
    />
  );
}

export default CInput;
