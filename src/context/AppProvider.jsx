import React, { useState, useMemo, useEffect } from 'react';
import MyContext from './MyContext';
import { getCharacter, getTibiaHighscores } from '../services/axiosApi';


function AppProvider({ children }) {
  const [character, setCharacter] = useState({});
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(true);

  const [filter, setFilter] = useState({
    world: 'all',
    category: 'experience',
    vocation: 'all'

  });

  const [highscores, setHighscores] = useState({
    category: '',
    highscore_list: []
  });

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

  const fetchHighscores = async () => {
    const { world, category, vocation } = filter;
    try {
      const response = await getTibiaHighscores(world, category, vocation, 1);
      setHighscores(response.highscores);
    } catch (error) {
      console.error('Erro ao obter dados da tabela classificatória:', error);
      setHighscores({ category: '', highscore_list: [] });
    }
  };

  useEffect(() => {
    fetchHighscores();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const vocations = ['all', 'knights', 'paladins', 'sorcerers', 'druids'];

  const contextValue = useMemo(
    () => ({
      character,
      fetchCharacter,
      search,
      setSearch,
      result,
      setResult,
      filter,
      setFilter,
      highscores,
      vocations,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [character, search, result, filter, highscores]
  );

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

export default AppProvider;
