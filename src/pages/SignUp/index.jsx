import RegisterForm from "../../components/RegisterForm";

import styles from "./styles.module.css";

function SignUpPage() {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
}

export default SignUpPage;
