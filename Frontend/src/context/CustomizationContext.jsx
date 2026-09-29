import React, { createContext, useContext, useState } from 'react';
import { CUSTOM_STUDIO_SHADES } from '../data/products';

const CustomizationContext = createContext();

export function CustomizationProvider({ children }) {
  const [selectedShades, setSelectedShades] = useState(["red", "wine"]);
  const [finish, setFinish] = useState("Gloss");
  const [comboName, setComboName] = useState("");
  const [message, setMessage] = useState("");

  const toggleShade = (shadeId) => {
    if (selectedShades.includes(shadeId)) {
      if (selectedShades.length > 1) {
        setSelectedShades(selectedShades.filter((id) => id !== shadeId));
      }
    } else {
      if (selectedShades.length < 4) {
        setSelectedShades([...selectedShades, shadeId]);
      }
    }
  };

  const selectedShadeObjects = CUSTOM_STUDIO_SHADES.filter((s) =>
    selectedShades.includes(s.id)
  );

  return (
    <CustomizationContext.Provider
      value={{
        selectedShades,
        selectedShadeObjects,
        toggleShade,
        finish,
        setFinish,
        comboName,
        setComboName,
        message,
        setMessage
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
}

export function useCustomization() {
  const context = useContext(CustomizationContext);
  if (!context) {
    throw new Error("useCustomization must be used within a CustomizationProvider");
  }
  return context;
}
