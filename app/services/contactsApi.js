import axios from 'axios'

const contactsApi = axios.create({
    baseURL: 'https://6abc4108b2118ed7abb9a6bc.mockapi.io', // MockAPI
    timeout: 10000, // 10 segundos (API online pode ser mais lenta)
    headers: {
        'Content-Type': 'application/json',
    },
});

// Adicionar interceptors para tratamento global
contactsApi.interceptors.request.use(
    (config) => {
        console.log('Enviando requisição:', config.url);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

contactsApi.interceptors.response.use(
    (response) => {
        console.log('Resposta recebida:', response.status);
        return response;
    },
    (error) => {
        console.error('Erro na requisição:', error.message);
        return Promise.reject(error);
    }
);

export default contactsApi;