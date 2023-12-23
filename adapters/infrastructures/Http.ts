import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import type { IHttp, IRequestOption } from './interfaces/iHttp';

class Http implements IHttp {
  async request(requestOption: IRequestOption): Promise<any> {
    const axiosConfig: AxiosRequestConfig = {
      method: requestOption.method,
      url: requestOption.url,
      headers: requestOption.headers ? { ...requestOption.headers } : {},
      data: requestOption.body ? JSON.stringify(requestOption.body) : undefined,
    };

    try {
      const response: AxiosResponse = await axios(axiosConfig);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return Promise.reject(error);
    }
  }
}

export default Http;
