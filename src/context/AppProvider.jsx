import React, { useState, useMemo } from 'react';
import MyContext from './MyContext';
import { getCharacter } from '../services/axiosApi';

function AppProvider({ children }) {
  const [character, setCharacter] = useState({});

  const fetchCharacter = async () => {
    try {
      const response = await getCharacter();
      setCharacter(response.character);
    } catch (error) {
      console.error('Erro ao obter dados do personagem:', error);
    }
  };

  const contextValue = useMemo(
    () => ({
      character,
      fetchCharacter,
    }),
    [character]
  );

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

export default AppProvider;
