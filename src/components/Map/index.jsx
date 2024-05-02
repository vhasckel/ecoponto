import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCoordinate } from "../../context/CoordinatesContext";
import { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";

import UserCardList from "../UserCardList";
import LocalCard from "../LocalCard";

import styles from "./styles.module.css";

function isValidCoordinate(latitude, longitude) {
  return (
    !isNaN(parseFloat(latitude)) &&
    !isNaN(parseFloat(longitude)) &&
    latitude !== undefined &&
    longitude !== undefined
  );
}

function Map() {
  const { locations } = useContext(LocationContext);
  const { coordinate } = useCoordinate();

  const position = [coordinate.latitude, coordinate.longitude];
  return (
    <div className={styles.container}>
      <MapContainer center={position} zoom={3} scrollWheelZoom={true}>
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
