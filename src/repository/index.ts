import axios from 'axios';
import { BaseUrl } from '../constants';


const  axiosInstance = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => Promise.reject(error),
);
const Repository = {
  get: (url:string, params = {}, token = {} ||null) =>
    axiosInstance
      .get(url, {
        params,
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .then((response) => response.data)
      .catch((error) => Promise.reject(error)),

  post: (url:string, data = {}, params = {}, token = null) =>
    axiosInstance
      .post(url, data, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        params,
      })
      .then((response) => response.data)
      .catch((error) => Promise.reject(error)),

  put: (url:string, data = {}, params = {}, token = null) =>
    axiosInstance
      .put(url, data, {
        params,
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .then((response) => response.data)
      .catch((error) => Promise.reject(error)),

  delete: (url:string, data = {}, params = {}, token = null) =>
    axiosInstance
      .delete(url, {
        params,
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .then((response) => response.data)
      .catch((error) => Promise.reject(error)),

  postWithFile: (url:string, data:any, token = null, params = {}) => {
    const headers = {
      'Content-Type': 'multipart/form-data',
       Authorization: `Bearer ${token}` 
    };

    return axiosInstance
      .post(url, data, {
        headers,
        params,
      })
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  },
};

export default Repository;