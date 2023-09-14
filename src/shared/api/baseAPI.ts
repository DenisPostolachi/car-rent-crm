import axios, { AxiosRequestHeaders } from 'axios';
import { RequestParams } from './types';

export default class BaseAPI {
  protected readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  protected fetch = async <ResponseDataType>({
    method,
    path,
    params = {},
    data = {},
    requestId,
    responseType,
  }: RequestParams) => {
    const headers: AxiosRequestHeaders = {} as AxiosRequestHeaders;
    if (requestId) {
      headers['X-Trace-Id'] = requestId;
    }

    return axios.request<ResponseDataType>({
      url: `${this.baseURL}/${path}`,
      method,
      params,
      data,
      headers,
      responseType,
    });
  };

  protected get = async <ResponseDataType>(
    path: string,
    params: RequestParams['params'] = {},
    requestId: RequestParams['requestId'] = undefined,
    responseType: RequestParams['responseType'] = undefined,
  ) => this.fetch<ResponseDataType>({
    method: 'get',
    path,
    params,
    requestId,
    responseType,
  });

  protected post = async <ResponseDataType>(
    path: string,
    data: RequestParams['data'] = {},
    requestId: RequestParams['requestId'] = undefined,
  ) => this.fetch<ResponseDataType>({
    method: 'post',
    path,
    data,
    requestId,
  });

  protected delete = async <ResponseDataType>(
    path: string,
    params: RequestParams['params'] = {},
    requestId: RequestParams['requestId'] = undefined,
  ) => this.fetch<ResponseDataType>({
    method: 'delete',
    path,
    params,
    requestId,
  });
}
