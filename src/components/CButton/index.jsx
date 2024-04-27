import { Button } from "@mui/material";

function CButton({ type, text, onClick }) {
  return (
    <Button
      onClick={onClick}
      type={type}
      style={{
        padding: "14px",
        backgroundColor: "#4caa66",
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
}

export default CButton;
