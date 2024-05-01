import { useForm } from "react-hook-form";
import { getCep } from "../../utils/getCEP";
import { useCallback, useContext, useState } from "react";
import { LocationContext } from "../../context/LocationContext";
import { useCoordinate } from "../../context/CoordinatesContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import InputField from "../InputField";
import validationRules from "../../utils/validationRules";
import CButton from "../CButton";
import WasteTypeCheckbox from "../WasteTypeCheckbox";
import AdressFields from "../AdressFields";

import styles from "./styles.module.css";

function LocationForm() {
  const { updateCoordinate } = useCoordinate();
  const { locations, registerLocation, updateLocation } =
    useContext(LocationContext);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    setValue,
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  useLocation(id, locations, setValue);

  const handleCep = useCallback(async () => {
    const cep = getValues("cep");
    await getCep(cep, setValue);
  }, [getValues, setValue]);

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

    if (id) {
      // Se temos um ID, significa que estamos editando
      console.log(id);
      updateLocation(id, submissionData);
    } else {
      // Se não temos um ID, estamos criando um novo
      registerLocation(submissionData);
    }

    navigate("/"); // Redirecionar após salvar
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>{id ? "Atualizar ponto de coleta" : "Cadastrar ponto de coleta"}</h2>

      <AdressFields register={register} errors={errors} handleCep={handleCep} />

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
        label="Identificador do Usuário (CPF)"
        type="text"
        errors={errors}
        rules={validationRules.cpf}
      />

      <h4>Tipos de resíduo</h4>

      <WasteTypeCheckbox
        register={register}
        selectedCheckboxes={selectedCheckboxes}
        handleCheckboxChange={handleCheckboxChange}
        formSubmitted={formSubmitted}
      />

      <CButton type="submit" text={id ? "Atualizar" : "Cadastrar"} />
    </form>
  );
}

export default LocationForm;
