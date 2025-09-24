import axios, {type AxiosRequestCoonfig} from "axios";


export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const fe