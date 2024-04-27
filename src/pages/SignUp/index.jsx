import ContentSection from "../../components/ContentSection";
import FormSection from "../../components/FormSection";

import styles from "./styles.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <ContentSection />
      <FormSection title={"Cadastre-se"} />
    </div>
  );
}

export default LoginPage;
