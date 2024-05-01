import { Button } from "@mui/material";

function CButton({ type, text, onClick, color }) {
  return (
    <Button
      onClick={onClick}
      type={type}
      color={color}
      style={{
        padding: "8px 10px",
        borderRadius: "20px",
        fontSize: ".8em",
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
}

export default CButton;
