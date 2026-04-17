/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from 'react';

const InteractionContext = createContext();

export const useInteractions = () => {
  const context = useContext(InteractionContext);
  if (!context) {
    throw new Error('useInteractions must be used within an InteractionProvider');
  }
  return context;
};

export const InteractionProvider = ({ children }) => {
  const [interactionStats, setInteractionStats] = useState(() => {
    const savedData = localStorage.getItem('interactionStats');
    return savedData ? JSON.parse(savedData) : { Call: 0, Text: 0, Video: 0 };
  });

  useEffect(() => {
    localStorage.setItem('interactionStats', JSON.stringify(interactionStats));
  }, [interactionStats]);

  const addInteraction = (type) => {
    console.log("Adding interaction for:", type);
    setInteractionStats((previousData) => ({
      ...previousData,
      [type]: (previousData[type] || 0) + 1,
    }));
  };

  const resetStats = () => {
    setInteractionStats({ Call: 0, Text: 0, Video: 0 });
    localStorage.removeItem('interactionStats'); 
  };

  return (
    <InteractionContext.Provider value={{ interactionStats, addInteraction, resetStats }}>
      {children}
    </InteractionContext.Provider>
  );
};