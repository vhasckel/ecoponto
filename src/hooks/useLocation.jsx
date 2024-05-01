import React, { useEffect } from "react";

function useLocation({ id, locations, setValue }) {
  return useEffect(() => {
    if (id) {
      const location = locations.find((location) => location.id === id);
      if (location) {
        Object.keys(location).forEach((key) => {
          setValue(key, location[key]);
        });
      }
    }
  }, [id, locations, setValue]);
}

export default useLocation;
