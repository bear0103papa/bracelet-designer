import { createContext, useState, useContext } from 'react';

const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [currentDesign, setCurrentDesign] = useState({
    size: 140, // 14.0cm
    crystals: []
  });
  const [selectedCrystal, setSelectedCrystal] = useState(null);
  const [savedDesigns, setSavedDesigns] = useState(() => {
    const saved = localStorage.getItem('savedDesigns');
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <DesignContext.Provider value={{
      currentDesign,
      setCurrentDesign,
      selectedCrystal,
      setSelectedCrystal,
      savedDesigns,
      setSavedDesigns
    }}>
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = () => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
};