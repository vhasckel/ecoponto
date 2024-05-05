import { Link } from "react-router-dom";
import React from "react";
import LoginForm from "../../components/LoginForm";

import styles from "./styles.module.css";

function SignInPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <div>
          <Link className={styles.logo} to="/">
            <h3>
              {" "}
              Eco<span className={styles.eco}>ponto</span>
            </h3>
            <img
              src="src/assets/logo.png"
              alt="Logo da plataforma, uma mão estendida com um broto de planta sobre ela"
            />
          </Link>
        </div>
      </div>
      <div className={styles.mobileScreen}>
        <div>
          <Link className={styles.logo} to="/">
            <h3>
              Eco<span className={styles.eco}>ponto</span>
            </h3>
            <img
              src="src/assets/logo.png"
              alt="Logo da plataforma, uma mão estendida com um broto de planta sobre ela"
            />
          </Link>
        </div>
      </div>
      <div className={styles.form}>
        <LoginForm />
      </div>
    </div>
  );
}

export default SignInPage;
