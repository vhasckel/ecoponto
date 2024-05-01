import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import InputField from "../InputField";
import CButton from "../CButton";
import validationRules from "../../utils/validationRules";

import styles from "./styles.module.css";

function LoginForm() {
  const { login } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputField
          register={register}
          name="email"
          label="E-mail"
          type="email"
          errors={errors}
          rules={validationRules.email}
        />
        <InputField
          register={register}
          name="password"
          label="Senha"
          type="password"
          errors={errors}
          rules={validationRules.password}
        />
        <CButton type="submit" text="Entrar" />
      </form>
      <div className={styles.register}>
        <span>
          Não possui
          <Link to="/cadastrar"> Cadastro</Link>?
        </span>
      </div>
    </div>
  );
}

export default LoginForm;
