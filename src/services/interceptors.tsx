// axiosInstance.js
import axios from 'axios';
import { REACT_APP_MOVIE_STORE_BASE_URL } from './Endpoint';

const axiosInstance = axios.create({
    baseURL: REACT_APP_MOVIE_STORE_BASE_URL
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // You can modify the request config here
        // For example, add headers or modify the data
        console.log('Request Interceptor:', config);
        return config;
    },
    (error) => {
        // Handle request error
        console.error('Request Interceptor Error:', error);
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // You can modify the response here
        // For example, handle success or modify the data
        console.log('Response Interceptor:', response);
        return response;
    },
    (error) => {
        // Handle response error
        console.error('Response Interceptor Error:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
