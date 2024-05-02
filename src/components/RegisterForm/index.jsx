import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useFetchCEP } from "../../hooks/useFetchCEP";
import { genderOptions, states } from "../../utils/selectOptions";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import CButton from "../CButton";
import InputField from "../InputField";
import SelectField from "../SelectField";
import validationRules from "../../utils/validationRules";

import styles from "./styles.module.css";

function RegisterForm() {
  const { registerUser } = useContext(UserContext);

  const {
    setValue,
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const handleCep = async () => {
    const cep = getValues("cep");
    await useFetchCEP(cep, setValue);
  };

  const onSubmit = (data) => {
    registerUser(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputField
          register={register}
          name="name"
          label="Nome Completo"
          type="text"
          errors={errors}
          rules={validationRules.name}
        />

        <SelectField
          register={register}
          label="Gênero"
          value={genderOptions[0].value}
          onChange={(event) => register("gender").onChange(event)}
          options={genderOptions}
        />

        <InputField
          register={register}
          name="cpf"
          label="CPF"
          type="number"
          errors={errors}
          rules={validationRules.cpf}
        />

        <InputField
          register={register}
          name="birth"
          label="Data de nascimento"
          type="text"
          errors={errors}
        />
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
          name="cep"
          label="CEP"
          type="number"
          errors={errors}
          rules={validationRules.cep}
          onBlur={handleCep}
        />

        <div className={styles.adress}>
          <div className={styles.left}>
            <InputField
              register={register}
              name="city"
              label="Cidade"
              type="text"
              errors={errors}
            />

            <InputField
              register={register}
              name="neighborhood"
              label="Bairro"
              type="text"
              errors={errors}
            />
          </div>
          <div className={styles.right}>
            <SelectField
              register={register}
              name="state"
              label="UF"
              type="text"
              onChange={(event) => register("uf").onChange(event)}
              options={states}
            />

            <InputField
              register={register}
              name="street"
              label="Rua"
              type="text"
              errors={errors}
            />
          </div>
        </div>

        <InputField
          register={register}
          name="password"
          label="Senha"
          type="password"
          errors={errors}
          rules={validationRules.password}
        />

        <CButton
          type="submit"
          text="Cadastrar"
          style={{
            padding: "8px 10px",
            borderRadius: "20px",
            fontSize: ".8em",
            backgroundColor: "#4caa66",
          }}
        />
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
