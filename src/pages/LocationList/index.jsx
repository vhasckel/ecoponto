import LocationList from "../../components/LocationList";

import styles from "./styles.module.css";

function LocationPage() {
  return (
    <div className={styles.container}>
      <h2>Pontos de Coleta</h2>
      <LocationList showButtons={true} />;
    </div>
  );
}

export default LocationPage;
