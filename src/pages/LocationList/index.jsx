import LocationList from "../../components/LocationList";
import CButton from "../../components/CButton";
import { styled } from "@mui/system";
import { Card } from "@mui/material";

function LocationPage() {
  const StyledCard = styled(Card)`
    padding: 1em;
    width: 30em;
  `;
  return (
    <StyledCard>
      <LocationList showDeleteButton={true} />
    </StyledCard>
  );
}

export default LocationPage;
