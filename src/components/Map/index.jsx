import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  CoordinateContext,
  useCoordinate,
} from "../../context/CoordinatesContext";
import { useContext, useEffect } from "react";
import { LocationContext } from "../../context/LocationContext";

import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";

function Map() {
  const { locations, updateCoordinate, coordinate } =
    useContext(LocationContext);
  const { search } = useLocation();

  function isValidCoordinate(latitude, longitude) {
    return (
      !isNaN(parseFloat(latitude)) &&
      !isNaN(parseFloat(longitude)) &&
      latitude !== undefined &&
      longitude !== undefined
    );
  }

  useEffect(() => {
    const params = new URLSearchParams(search);
    const lat = parseFloat(params.get("latitude"));
    const long = parseFloat(params.get("longitude"));

    if (isValidCoordinate(lat, long)) {
      updateCoordinate({ latitude: lat, longitude: long }); // Atualizar coordenadas no contexto
    }
  }, [search, updateCoordinate]);

  const position = [coordinate.latitude, coordinate.longitude];
  return (
    <div className={styles.container}>
      <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Array.isArray(locations) ? (
          locations.map((location, index) => {
            const lat = parseFloat(location.latitude);
            const long = parseFloat(location.longitude);

            if (isValidCoordinate(lat, long)) {
              return (
                <Marker key={index} position={[lat, long]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              );
            } else {
              console.warn(
                `Coordenadas inválidas para a localização com ID: ${location.id}`
              );
              return null;
            }
          })
        ) : (
          <p>Nenhuma localização disponível.</p>
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
