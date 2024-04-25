import CButton from "../CButton";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="src/assets/logo.png" alt="" />
      </div>
    </header>
  );
}

export default Header;
