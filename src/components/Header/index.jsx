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
        {/* <div className={styles.linksDesktop}>
          <Link to="/lista-de-localizacoes">
            <NavigationLink text={"Pontos de Coleta"} />
          </Link>
          <Link to="/cadastrar-localizacao">
            <NavigationLink text={"Cadastrar ponto de coleta"} />
          </Link>
        </div> */}
      </div>
      <ProfileMenu />
    </header>
  );
}

export default Header;
