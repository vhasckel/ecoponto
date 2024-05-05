import { createContext, useState, useContext } from "react";

export const CoordinateContext = createContext();

export const CoordinateProvider = ({ children }) => {
  const [coordinate, setCoordinate] = useState({
    latitude: 51.505,
    longitude: -0.09,
  });

  const updateCoordinate = (newLocation) => {
    setCoordinate(newLocation);
  };

  console.log("updateCoordinate contexto:", updateCoordinate);

  return (
    <CoordinateContext.Provider value={{ coordinate, updateCoordinate }}>
      {children}
    </CoordinateContext.Provider>
  );
};

export const useCoordinate = () => {
  return useContext(CoordinateContext);
};
