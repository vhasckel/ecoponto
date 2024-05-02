import React from "react";
import Map from "../../components/Map";
import UserCardList from "../../components/UserCardList";
import LocalCard from "../../components/LocalCard";

import styles from "./styles.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <Map />
      <LocalCard />
      <UserCardList />
    </div>
  );
}

export default HomePage;
