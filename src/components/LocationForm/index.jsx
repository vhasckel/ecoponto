import { useForm } from "react-hook-form";
import { useFetchCEP } from "../../hooks/useFetchCEP";
import { useCallback, useContext, useState, useEffect } from "react";
import { LocationContext } from "../../context/LocationContext";
import { useCoordinate } from "../../context/CoordinatesContext";
import { useNavigate, useParams } from "react-router-dom";

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
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    setValue,
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const handleCep = useCallback(async () => {
    const cep = getValues("cep");
    await useFetchCEP(cep, setValue);
  }, [getValues, setValue]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  //useEffect para redirecionar para a página de edição com os dadso já preenchidos
  useEffect(() => {
    if (id) {
      setIsEditing(true);
      const existingLocation = locations.find((loc) => loc.id === id);
      if (existingLocation) {
        setValue("description", existingLocation.description);
        setValue("userId", existingLocation.userId);
        setValue("cep", existingLocation.cep);
        setValue("street", existingLocation.street);
        setValue("neighborhood", existingLocation.neighborhood);
        setValue("longitude", existingLocation.longitude.toString());
        setValue("latitude", existingLocation.latitude.toString());

        const wasteTypeSelections = {};
        existingLocation.wasteTypes.forEach((wasteType) => {
          wasteTypeSelections[wasteType] = true;
        });
        setSelectedCheckboxes(wasteTypeSelections);
      }
    }
  }, [id, locations, setValue]);

  const onSubmit = (data) => {
    setFormSubmitted(true);

    // verifica se pelo menos um checkbox está selecionado
    const selectedCheckboxCount =
      Object.values(selectedCheckboxes).filter(Boolean).length;

    if (selectedCheckboxCount === 0) {
      return;
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

    if (isEditing) {
      updateLocation(id, submissionData);
    } else {
      registerLocation(submissionData);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>
        {isEditing ? "Atualizar ponto de coleta" : "Cadastrar ponto de coleta"}
      </h2>

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
