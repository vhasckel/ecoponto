import List from "@mui/material/List";
import { Box, Container } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import React from "react";
import CButton from "../CButton";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function LocationList({ showDeleteButton }) {
  const { locations, deleteLocation } = useContext(LocationContext);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editar-localização/${id}`);
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
          {showDeleteButton && (
            <div className={styles.btns}>
              <CButton onClick={() => handleEdit(location.id)} text="Editar" />
              <CButton
                onClick={() => deleteLocation(location.id)}
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
