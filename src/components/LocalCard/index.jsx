import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/system";

const StyledCardContent = styled(CardContent)`
  display: flex;
  padding: 1em 0 1em 0;
`;

const StyledCard = styled(Card)`
  padding: 1em;
  width: 30em;
`;

const LocationItem = ({ title, subtitle }) => (
  <StyledCardContent>
    <LocationOnIcon aria-label="Localização" />
    <Typography component="div" variant="h6">
      {title}
      <Typography variant="subtitle1" color="text.secondary">
        {subtitle}
      </Typography>
    </Typography>
  </StyledCardContent>
);

const LocalCard = () => {
  return (
    <StyledCard>
      <Typography component="div" variant="h5">
        Locais cadastrados
      </Typography>
      <LocationItem title="Rua Professora Enoé Schutel" subtitle="Trindade" />
    </StyledCard>
  );
};

export default LocalCard;
