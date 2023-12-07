import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://api.tibiadata.com/v4/',
})

export const getCharacter = async (name) => {
    const apiResponse = await axiosApi
        .get(`characters/${name}`)
        .catch((err) => err.respose.data);
    return apiResponse.data;
};