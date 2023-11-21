import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { envs } from './env';

const configAxios = Axios.create({
  baseURL: envs.API_YARA,
  timeout: 0,
});

export class ApiService {
  static get(relativeUrl: string, configs: AxiosRequestConfig<object> = {}): Promise<AxiosResponse> {
    return configAxios.get(relativeUrl, configs);
  }

  static post(relativeUrl: string, data?: object, configs: AxiosRequestConfig<object> = {}): Promise<AxiosResponse> {
    return configAxios.post(relativeUrl, data ?? {}, configs);
  }
}
