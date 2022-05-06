export interface SendCodeParams {
  mobile?: string;
  email?: string;
  mode: 'register' | 'login' | 'update' | 'resetPsd';
}

export interface RegisterParams {
  email?: string;
  mobile?: string;
  code: string;
  password: string;
  clientId?: string; // 其实必传，这边做了处理
}

export interface ResetPsdParams {
  mobile?: string;
  email?: string;
  code: string;
  password: string;
}

export interface LoginParams {
  mobile?: string;
  email?: string;
  code?: string;
  password?: string;
  clientId?: string; // 其实必传，这边做了处理
}

export interface CheckExistsParams {
  field: 'email' | 'mobile';
  value: string;
}
