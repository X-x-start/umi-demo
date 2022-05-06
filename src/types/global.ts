import { RuleObject, StoreValue } from 'rc-field-form/lib/interface.d';

export interface IPage {
  page?: number;
  pageSize?: number;
}

export interface IRes<T> {
  code: number;
  data: T;
  message: string;
  timestamp: number;
}

export interface ITable<T> {
  docs: T;
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export type SizeType = 'small' | 'middle' | 'large' | undefined;

export type Validator = (
  rule: RuleObject,
  value: StoreValue,
  callback: (error?: string) => void,
) => Promise<void | any> | void;

export interface UrlParams {
  location: {
    query: {
      /* 应用id */
      clientId?: string;
      /* 重定向地址 */
      redirectUrl?: string;
    };
  };
}

export type CaptchaMode = 'register' | 'login' | 'resetPsd' | 'update';

export type CheckExistMode =
  | 'register'
  | 'login'
  | 'resetPassword'
  | 'bind'
  | 'modify';
