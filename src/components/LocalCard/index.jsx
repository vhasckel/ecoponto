import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import LocationList from "../../components/LocationList";

import styles from "./styles.module.css";

const LocalCard = () => {
  return (
    <div className={styles.container}>
      <Typography component="div" variant="h5" paddingBottom="1em">
        Locais cadastrados
      </Typography>
      <LocationList showDeleteButton={false} />
    </div>
  );
};

export default LocalCard;
