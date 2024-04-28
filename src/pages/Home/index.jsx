import React from "react";
import Map from "../../components/Map";

import styles from "./styles.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <Map />
      </div>
    </>
  );
}

export default HomePage;
