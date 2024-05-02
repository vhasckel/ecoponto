import RegisterForm from "../../components/RegisterForm";

import styles from "./styles.module.css";

function SignUpPage() {
  return (
    <div className={styles.container}>
      <h1>Cadastre-se!</h1>
      <RegisterForm />
    </div>
  );
}

export default SignUpPage;
