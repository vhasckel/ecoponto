import React from "react";
import InputField from "../InputField";
import { useForm } from "react-hook-form";
import CButton from "../CButton";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import validationRules from "../../utils/validationRules";

function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputField
          register={register}
          name="email"
          label="E-mail"
          type="email"
          className="inputRounded"
          errors={errors}
          rules={validationRules.email}
        />
        <InputField
          register={register}
          name="password"
          label="Senha"
          type="password"
          className="inputRounded"
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
