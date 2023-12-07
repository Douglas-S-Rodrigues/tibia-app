import React, { useState, useMemo } from 'react';
import MyContext from './MyContext';
import { getCharacter } from '../services/axiosApi';

function AppProvider({ children }) {
  const [character, setCharacter] = useState({});
  const [search, setSearch] = useState('');

  const fetchCharacter = async (name) => {
    try {
      const response = await getCharacter(name);
      setCharacter(response.character);
    } catch (error) {
      console.error('Erro ao obter dados do personagem:', error);
    }
  };

  const contextValue = useMemo(
    () => ({
      character,
      fetchCharacter,
      search,
      setSearch,
    }),
    [character, search]
  );

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

export default AppProvider;
