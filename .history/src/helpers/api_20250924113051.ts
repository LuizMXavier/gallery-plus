import axios, {type AxiosRequest}


export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});