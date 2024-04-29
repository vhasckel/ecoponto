import { useForm } from "react-hook-form";
import { getCep } from "../../utils/getCEP";
import { useContext, useState } from "react";
import { LocationContext } from "../../context/LocationContext";
import { useCoordinate } from "../../context/CoordinatesContext";
import InputField from "../InputField";
import validationRules from "../../utils/validationRules";
import CButton from "../CButton";
import WasteTypeCheckbox from "../WasteTypeCheckbox";

import styles from "./styles.module.css";

function LocationForm() {
  const { updateCoordinate } = useCoordinate();
  const { registerLocation } = useContext(LocationContext);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    setValue,
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const handleCep = async () => {
    const cep = getValues("cep");
    await getCep(cep, setValue);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const onSubmit = (data) => {
    setFormSubmitted(true); // Indicar que uma tentativa de submissão foi feita

    // Verificar se pelo menos um checkbox está selecionado
    const selectedCheckboxCount =
      Object.values(selectedCheckboxes).filter(Boolean).length;

    if (selectedCheckboxCount === 0) {
      return; // Não submeter o formulário se não houver itens selecionados
    }

    const longitude = parseFloat(data.longitude);
    const latitude = parseFloat(data.latitude);

    updateCoordinate({ longitude, latitude });

    const submissionData = {
      ...data,
      wasteTypes: Object.entries(selectedCheckboxes)
        .filter(([, checked]) => checked)
        .map(([name]) => name),
    };
    console.log("Form submission data:", submissionData);
    registerLocation(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>Cadastrar ponto de coleta</h2>

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
          name="longitude"
          label="Longitude em graus"
          type="text"
          errors={errors}
          rules={validationRules.longitude}
        />
        <InputField
          register={register}
          name="latitude"
          label="Latitude em graus"
          type="text"
          errors={errors}
          rules={validationRules.latitude}
        />
      </div>

      <InputField
        register={register}
        name="description"
        label="Descrição do Local"
        type="text"
        errors={errors}
      />

      <InputField
        register={register}
        name="userId"
        label="Identificador do Usuário"
        type="text"
        errors={errors}
        rules={validationRules.userIdentification}
      />

      <h4>Tipos de resíduo</h4>

      <WasteTypeCheckbox
        register={register}
        selectedCheckboxes={selectedCheckboxes}
        handleCheckboxChange={handleCheckboxChange}
        formSubmitted={formSubmitted}
      />

      <CButton type="submit" text="Cadastrar" />
    </form>
  );
}

export default LocationForm;
