import type { Method, ResponseType } from 'axios';

export type RequestParams = {
  method: Method
  path: string
  data?: Record<string, unknown>;
  params?: Record<string, unknown>;
  requestId?: string;
  responseType?: ResponseType;
};
