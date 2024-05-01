import { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import CButton from "../CButton";

import styles from "./styles.module.css";

function LocationList() {
  const { locations, deleteLocation } = useContext(LocationContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editar-localização/${id}`);
  };

  const handleDelete = (id) => {
    deleteLocation(id);
  };
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {locations.map((location) => (
        <React.Fragment key={location.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <LocationOnIcon aria-label="Localização" />
            </ListItemAvatar>
            <ListItemText
              primary={location.street}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  {location.neighborhood}
                </>
              }
            />
          </ListItem>
          {currentUser &&
            currentUser.cpf === location.userId && ( // Verificar se o usuário pode editar ou deletar
              <div className={styles.btns}>
                <CButton
                  onClick={() => handleEdit(location.id)}
                  text="Editar"
                />
                <CButton
                  onClick={() => handleDelete(location.id)}
                  text="Deletar"
                  color={"error"}
                />
              </div>
            )}
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}

export default LocationList;
