import { Button } from "@mui/material";
import styled from "@emotion/styled";

function NavigationLink({ text }) {
  const StyledButton = styled(Button)`
    border-radius: 20px;
    background-color: #c6fad4;
    border-color: #c6fad4;
    color: #4caa66;
    margin-left: 1em;

    &:hover {
      border-color: #4caa66;
      background-color: #ddffe6;
    }
  `;
  return <StyledButton variant="outlined">{text}</StyledButton>;
}

export default NavigationLink;
