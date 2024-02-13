// import axios from "axios";
import axiosInstance from './interceptors';
import { ENDPOINTS, COMMON_HEADERS } from './endpoint';
import { AxiosResponse } from 'axios';

export const fetchGenres = async (): Promise<any> => {
    try {
        const response: AxiosResponse = await axiosInstance({
            method: ENDPOINTS.fetchGenres.method,
            url: ENDPOINTS.fetchGenres.url,
            headers: COMMON_HEADERS,
        });
        console.info(response.data);
        return response.data;
    } catch (error) {
        // Handle errors, you might want to create a custom error handling function
        console.error('API Error:', error);
        // You can throw the error to let the calling code handle it
        throw error;
    }
};
