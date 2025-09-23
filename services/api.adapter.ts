import { URL } from '@/shared/constants';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  async get<T>(
    url: string,
    options?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await axiosInstance.get<T>(url, options);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async post<T>(
    url: string,
    data: any,
    options?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await axiosInstance.post<T>(url, data, options);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async patch<T>(
    url: string,
    data: any,
    options?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await axiosInstance.patch(url, data, options);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async delete<T>(
    url: string,
    options?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await axiosInstance.delete(url, options);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
