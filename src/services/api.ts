import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api'; // Fallback to /api for development

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Handle errors globally
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const api = {
  get: <T>(url: string, params?: any): Promise<T> =>
    axiosInstance.get(url, { params }).then((res) => res.data),

  post: <T>(url: string, data: any): Promise<T> =>
    axiosInstance.post(url, data).then((res) => res.data),

  put: <T>(url: string, data: any): Promise<T> =>
    axiosInstance.put(url, data).then((res) => res.data),

  delete: <T>(url: string): Promise<T> =>
    axiosInstance.delete(url).then((res) => res.data),
};