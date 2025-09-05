import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASE_URL,
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
});

const loginApi = axios.create({
    baseURL: import.meta.env.VITE_MOCK_USERS_API_BASE_URL,
});

export { api, loginApi };
