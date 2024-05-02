import { Button } from "@mui/material";

function CButton({ type, text, onClick, color, style }) {
  return (
    <Button
      onClick={onClick}
      type={type}
      color={color}
      style={style}
      variant="contained"
    >
      {text}
    </Button>
  );
}

export default CButton;
