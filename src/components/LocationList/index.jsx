import { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import CButton from "../CButton";

import styles from "./styles.module.css";

function LocationList({ showButtons }) {
  const { locations, deleteLocation, updateCoordinate } =
    useContext(LocationContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEdit = (id, latitude, longitude) => {
    updateCoordinate({ latitude, longitude }); // Atualizar as coordenadas no contexto
    navigate(`/editar-localizacao/${id}`); // Redirecionar para a página de edição
  };

  const goToMap = (latitude, longitude) => {
    updateCoordinate({ latitude, longitude }); // Atualizar as coordenadas no contexto
    navigate("/"); // Redirecionar para a página inicial
  };

  return (
    <div className={styles.container}>
      {locations.map((location) => (
        <article key={location.id}>
          <div className={styles.card}>
            <LocationOnIcon aria-label="Localização" />
            <div className={styles.adress}>
              <h4>{location.street}</h4>
              <span>{location.neighborhood}</span>
            </div>
          </div>
          {showButtons &&
            currentUser &&
            currentUser.cpf === location.userId && (
              <div className={styles.btns}>
                <CButton
                  onClick={() => handleEdit(location.id)}
                  text="Editar"
                  style={{
                    borderRadius: "20px",
                    fontSize: ".8em",
                    fontWeight: "700",
                  }}
                />
                <CButton
                  onClick={() => handleDelete(location.id)}
                  text="Deletar"
                  color={"error"}
                  style={{
                    borderRadius: "20px",
                    fontSize: ".8em",
                    fontWeight: "700",
                  }}
                />
                <button
                  onClick={() =>
                    handleEdit(
                      location.id,
                      location.latitude,
                      location.longitude
                    )
                  }
                >
                  Editar
                </button>
              </div>
            )}

          <button
            onClick={() => goToMap(location.latitude, location.longitude)}
          >
            Ir para o Mapa
          </button>
          <Divider variant="fullWidth " />
        </article>
      ))}
    </div>
  );
}

export default LocationList;
