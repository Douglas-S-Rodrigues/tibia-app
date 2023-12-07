import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://api.tibiadata.com/v4/character/Trollefar',
});

export const getCharacter = async () => {
  try {
    const apiResponse = await axiosApi.get();
    return apiResponse.data; 
  } catch (error) {
    console.error('Nome não encontrado', error);
    throw error;
  }
};
