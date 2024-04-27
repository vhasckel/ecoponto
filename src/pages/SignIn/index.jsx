import React from "react";
import LoginForm from "../../components/LoginForm";
import ContentSection from "../../components/ContentSection";

import styles from "./styles.module.css";

function SignInPage() {
  return (
    <div className={styles.container}>
      <ContentSection />
      <LoginForm />
    </div>
  );
}

export default SignInPage;
