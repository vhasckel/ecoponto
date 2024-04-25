import Header from "../../Header";
import ContentSection from "../../ContentSection";
import FormSection from "../../FormSection";

import styles from "./styles.module.css";

function LoginPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <ContentSection />
        <FormSection />
      </div>
    </>
  );
}

export default LoginPage;
