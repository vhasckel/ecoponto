import React from "react";
import InputField from "../InputField";
import validationRules from "../../utils/validationRules";

import styles from "./styles.module.css";

function AdressFields({ register, errors, handleCep }) {
  return (
    <div className={styles.adressContainer}>
      <InputField
        register={register}
        name="cep"
        label="CEP"
        type="number"
        errors={errors}
        rules={validationRules.cep}
        onBlur={handleCep}
      />
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
      <InputField
        register={register}
        name="state"
        label="UF"
        type="text"
        errors={errors}
      />
      <InputField
        register={register}
        name="street"
        label="Rua"
        type="text"
        errors={errors}
      />
      <InputField
        register={register}
        name="latitude"
        label="Latitude"
        type="text"
        errors={errors}
        rules={validationRules.latitude}
      />
      <InputField
        register={register}
        name="longitude"
        label="Longitude"
        type="text"
        errors={errors}
        rules={validationRules.longitude}
      />
    </div>
  );
}

export default AdressFields;
