import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src="src/assets/logo.png"
            alt="Logo da plataforma, uma mão estendida com um broto de planta sobre ela"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
