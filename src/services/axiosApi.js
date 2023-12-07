import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://api.tibiadata.com/v4',
});

export const getCharacter = async (name) => {
  try {
    const apiResponse = await axiosApi.get(`/character/${name}`);
    return apiResponse.data; 
  } catch (error) {
    console.error('Nome não encontrado', error);
    throw error;
  }
};
