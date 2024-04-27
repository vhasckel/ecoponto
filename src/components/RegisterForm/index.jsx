import { useForm } from "react-hook-form";
import CButton from "../CButton";
import InputField from "../InputField";
import SelectField from "../SelectField";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function RegisterForm() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      gender: "Feminino",
    },
  });

  const genderValue = getValues("gender");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputField
          register={register}
          name="name"
          label="Nome Completo"
          type="text"
          className="inputRounded"
          errors={errors}
          rules={{
            required: "Este campo é obrigatório",
            minLength: {
              value: 3,
              message: "O nome deve ter pelo menos 3 caracteres",
            },
            maxLength: {
              value: 20,
              message: "O nome não pode ter mais de 20 caracteres",
            },
          }}
        />

        <SelectField value={genderValue} register={register} />

        <InputField
          register={register}
          name="cpf"
          label="CPF"
          type="number"
          className="inputRounded"
          errors={errors}
          rules={{
            required: "CPF é obrigatório",
            minLength: {
              value: 11,
              message: "O CPF deve ter 11 caracteres",
            },
            maxLength: {
              value: 11,
              message: "O CPF deve ter 11 caracteres",
            },
          }}
        />

        <InputField
          register={register}
          name="birth"
          label="Data de nascimento"
          type="text"
          className="inputRounded"
          errors={errors}
        />
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
          name="cep"
          label="CEP"
          type="number"
          className="inputRounded"
          errors={errors}
          rules={{
            required: "CEP é obrigatório",
            minLength: {
              value: 8,
              message: "O CEP deve ter 11 caracteres",
            },
            maxLength: {
              value: 8,
              message: "O CEP deve ter 11 caracteres",
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

        <CButton type="submit" text="Cadastrar" />
      </form>
      <div className={styles.login}>
        <span>
          Fazer
          <Link to="/login"> Login</Link>
        </span>
      </div>
    </div>
  );
}

export default RegisterForm;
