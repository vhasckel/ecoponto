import { Button } from "@mui/material";

function CButton({ type, text }) {
  return (
    <Button
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
