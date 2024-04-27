import React from "react";
import InputField from "../InputField";
import { useForm } from "react-hook-form";
import CButton from "../CButton";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

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
          rules={{
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Formato de e-mail inválido",
            },
          }}
        />
        <InputField
          register={register}
          name="password"
          label="Senha"
          type="password"
          className="inputRounded"
          errors={errors}
          rules={{
            required: "Senha é obrigatória",
            minLength: {
              value: 8,
              message: "A senha deve ter pelo menos 8 caracteres",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message:
                "A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número",
            },
          }}
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
