import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://api.tibiadata.com/v4',
});

export const getCharacter = async (name) => {
  try {
    const apiResponse = await axiosApi.get(`/character/${name}`);
    return apiResponse.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.error('Erro 400: Requisição inválida. Verifique os parâmetros.');
    } else {
      console.error('Erro ao obter dados do personagem:', error);
    }
    throw error;
  }
};

export const getTibiaHighscores = async (world, category, vocation, page) => {
  try {
    const apiResponse = await axiosApi.get(`/highscores/${world}/${category}/${vocation}/${page}`);
    return apiResponse.data;
  } catch (error) {
    console.error('Erro ao obter dados da tabela classificatória:', error);
    throw error;
  }
};

export const getLatestNews = async () => {
  try {
    const apiResponse = await axiosApi.get('/news/latest');
    return apiResponse.data;
  } catch (error) {
    console.error('Erro ao obter as últimas notícias:', error);
    throw error;
  }
};

export const getBoostableBosses = async () => {
  try {
    const apiResponse = await axiosApi.get('/boostablebosses');
    return apiResponse.data;
  } catch (error) {
    console.error('Erro ao obter informações dos bosses:', error);
    throw error;
  }
};

export const getCreatures = async () => {
  try {
    const apiResponse = await axiosApi.get('/creatures');
    return apiResponse.data;
  } catch (error) {
    console.error('Erro ao obter informações sobre criaturas:', error);
    throw error;
  }
};