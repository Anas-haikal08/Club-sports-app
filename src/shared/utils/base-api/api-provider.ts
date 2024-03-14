import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {Modal, message} from 'antd';
import RequestConfig from './request-config';
import MainUtils from '../main';
import {
  AUTH_TOKEN,
  Default_Language,
  remoteServiceBaseApiUrl,
} from '../../constants/AppConst';
import urlJoin from 'url-join';

export interface IBaseApiResponse<T> {
  data: T;
}

export default class ApiProvider {
  api: AxiosInstance;

  getCookieValue(key: string): string | null {
    var equalities = document.cookie.split('; ');
    for (var i = 0; i < equalities.length; i++) {
      if (!equalities[i]) {
        continue;
      }

      var splitted = equalities[i].split('=');
      if (splitted.length !== 2) {
        continue;
      }

      if (decodeURIComponent(splitted[0]) === key) {
        return decodeURIComponent(splitted[1] || '');
      }
    }

    return null;
  }
  deleteCookie(name: string) {
    const date = new Date();
    date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);
    document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
  }

  constructor(config: RequestConfig) {
    this.api = axios.create({
      ...config,
      baseURL: urlJoin(`${remoteServiceBaseApiUrl}`, `${config.baseURL}`),
    });
    this.api.interceptors.request.use((req: any) => {
      return {
        ...req,
        headers: {
          ...req.headers,
          Accept: '*',
          Authorization: `Bearer ${this.getCookieValue(AUTH_TOKEN)}`,
          ['language-key']: `${this.getCookieValue(
            Default_Language,
          )?.toUpperCase()}`,
        },
      };
    });
    this.api.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.data === '') {
          return {...res, data: null};
        }
        if (
          typeof res?.data?.data === 'string' &&
          res?.config?.url !== '/set-web-fcm-token'
        ) {
          message.success(res?.data?.data);
        }
        return res?.data;
      },
      (error: any) => {
        if (!MainUtils.isEmptyValue(error?.response?.data?.message)) {
          Modal.error({
            title: error?.response?.data?.message,
          });
          return;
        } else if (!MainUtils.isEmptyValue(error?.response?.data)) {
          Modal.error({
            title: error?.response?.data,
          });
          return;
        } else if (!MainUtils.isEmptyValue(error?.message)) {
          Modal.error({
            title: error?.message,
          });
          return;
        }
        /* if (
          error?.response?.data?.statusCode === 401 ||
          error?.response?.data?.statusCode === 403
        ) {
          this.deleteCookie(AUTH_TOKEN);
          window.location.href = '/error-pages/error-401';
        } */
        return {error: error?.response?.data};
      },
    );
  }

  async request<T>(config: RequestConfig): Promise<any> {
    return await this.api.request<IBaseApiResponse<T>>(config);
  }
}
