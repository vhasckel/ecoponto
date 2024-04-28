import { Link } from "react-router-dom";
import ProfileMenu from "../ProfileMenu";
import NavigationLink from "../NavigationLink";

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
      <div className={styles.navigation}>
        <NavigationLink text={"Pontos de coleta"} />
        <Link to="/cadastrar-localização">
          <NavigationLink text={"Cadastrar ponto de coleta"} />
        </Link>
        <ProfileMenu />
      </div>
    </header>
  );
}

export default Header;
