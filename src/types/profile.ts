export interface UpdateBasicParams {
  avatar?: string;
  username?: string;
}

export interface UpdateBindingParams {
  mobile?: string;
  email?: string;
  code: string;
  password: string;
}

export interface UnbindingParams {
  type: 'email' | 'mobile';
  password: string;
}

export interface UpdatePsdParams {
  originalPassword: string;
  password: string;
}

export interface LoginRecord {
  _id: string;
  userId: string;
  loginType: string;
  relatedProduct: string;
  host: string;
  userAgent: string;
  ip: string;
  createId: string;
  updateId: string;
  __v: number;
  status: number;
  updateAt: Date;
  createAt: Date;
}
