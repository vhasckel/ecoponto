import RegisterForm from "../RegisterForm";
import styles from "./styles.module.css";

function FormSection({ title }) {
  return (
    <div className={styles.form}>
      <h2>{title}</h2>
      <RegisterForm />
      <div className={styles.login}>
        <span>
          Fazer <a href="#">Login</a>
        </span>
      </div>
    </div>
  );
}

export default FormSection;
