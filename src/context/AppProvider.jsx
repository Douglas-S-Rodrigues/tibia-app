import React, { useState, useMemo } from 'react';
import MyContext from './MyContext';
import { getCharacter } from '../services/axiosApi';

function AppProvider({ children }) {
  const [character, setCharacter] = useState({});
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(true);

  const fetchCharacter = async (name) => {
    try {
      const response = await getCharacter(name);
      setCharacter(response.character);
      setResult(true);
    } catch (error) {
      console.error('Erro ao obter dados do personagem:', error);
      setCharacter({});
      setResult(false); 
    }
  };

  const contextValue = useMemo(
    () => ({
      character,
      fetchCharacter,
      search,
      setSearch,
      result,
      setResult,
    }),
    [character, search, result]
  );

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

export default AppProvider;
