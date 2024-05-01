import { createContext, useEffect, useState } from "react";

export const LocationContext = createContext();

const fetchLocation = async (setLocations) => {
  try {
    const response = await fetch("http://localhost:3000/locations");
    const data = await response.json();
    setLocations(data);
    console.log("componente LocationContext", data);
  } catch {
    console.error("Error fetching locations: ", error);
  }
};

export const LocationContextProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocation(setLocations);
  }, []);

  const registerLocation = async (location) => {
    try {
      await fetch("http://localhost:3000/locations", {
        method: "POST",
        body: JSON.stringify(location),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário");
    }
  };

  const deleteLocation = async (id) => {
    try {
      await fetch(`http://localhost:3000/locations/${id}`, {
        method: "DELETE",
      });
      fetchLocation(setLocations); //chamar o fetch para atualizar a lista!!
    } catch (error) {
      console.error("Erro ao excluir local: ", error);
      alert("Erro ao excluir local");
    }
  };

  const updateLocation = async (id, location) => {
    try {
      const response = await fetch(`http://localhost:3000/locations/${id}`, {
        method: "PATCH",
        body: JSON.stringify(location),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(`Failed to update location with ID: ${id}`);
      }
      fetchLocation(setLocations);
    } catch (error) {
      console.error("Erro ao atualizar local: ", error);
    }
  };

  return (
    <LocationContext.Provider
      value={{ locations, registerLocation, deleteLocation, updateLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
