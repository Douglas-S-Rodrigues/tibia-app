import React, { useState, useMemo, useEffect } from 'react';
import MyContext from './MyContext';
import { getCharacter, getTibiaHighscores, getLatestNews, getBoostableBosses, getCreatures } from '../services/axiosApi';

function AppProvider({ children }) {
  const [character, setCharacter] = useState({});
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(true);
  const [news, setNews] = useState([]);
  const [bossesInfo, setBossesInfo] = useState({ boostable_bosses: { boostable_boss_list: [], boosted: {} } });
  const [creaturesInfo, setCreaturesInfo] = useState({ creatures: { boosted: { featured: false, image_url: '', name: '', race: '' }, creature_list: [] } });

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

  const fetchNews = async () => {
    try {
      const response = await getLatestNews();
      setNews(response.news);
    } catch (error) {
      console.error('Erro ao obter as últimas notícias:', error);
      setNews([]);
    }
  };

  const fetchBoostableBosses = async () => {
    try {
      const response = await getBoostableBosses();
      setBossesInfo(response);
    } catch (error) {
      console.error('Erro ao obter informações dos bosses:', error);
      setBossesInfo({ boostable_bosses: { boostable_boss_list: [], boosted: {} } });
    }
  };

  const fetchCreatures = async () => {
    try {
      const response = await getCreatures();
      setCreaturesInfo(response);
    } catch (error) {
      console.error('Erro ao obter informações sobre criaturas:', error);
      setCreaturesInfo({ creatures: { boosted: { featured: false, image_url: '', name: '', race: '' }, creature_list: [] } });
    }
  };

  useEffect(() => {
    fetchHighscores();
    fetchNews();
    fetchBoostableBosses();
    fetchCreatures();
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
      news,
      bossesInfo,
      creaturesInfo,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [character, search, result, filter, highscores, news, bossesInfo, creaturesInfo]
  );

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

export default AppProvider;
