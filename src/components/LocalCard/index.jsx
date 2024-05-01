import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import LocationList from "../../components/LocationList";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  padding: 1em;
  width: 30em;
`;

const LocalCard = () => {
  return (
    <StyledCard>
      <Typography component="div" variant="h5">
        Locais cadastrados
      </Typography>
      <LocationList showDeleteButton={false} />
    </StyledCard>
  );
};

export default LocalCard;
