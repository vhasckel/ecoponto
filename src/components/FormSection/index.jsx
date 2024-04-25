import CForm from "../CForm";
import styles from "./styles.module.css";
function FormSection() {
  return (
    <div className={styles.form}>
      <h2>Cadastre-se!</h2>
      <CForm />
      <div className={styles.login}>
        <span>
          Fazer <a href="#">Login</a>
        </span>
      </div>
    </div>
  );
}

export default FormSection;
