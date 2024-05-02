import React from "react";
import LoginForm from "../../components/LoginForm";

import styles from "./styles.module.css";

function SignInPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.form}>
        <LoginForm />
      </div>
    </div>
  );
}

export default SignInPage;
