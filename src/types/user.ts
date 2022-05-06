export interface IUser {
  approveStatus: number;
  relatedAccount: RelatedAccount;
  createAt: Date;
  updateAt: Date;
  status: number;
  licensedProduct: LicensedProduct;
  lastLoginTime: Date;
  __v: number;
  updateId: string;
  createId: string;
  lastIp: string;
  username: string;
  email: string;
  avatar: string;
  mobile: string;
  _id: string;
}

export interface RelatedAccount {
  /* 微信 */
  openId: string;
  /* 数字中台用户 */
  dpUserId: string;
}

export interface LicensedProduct {
  EData?: boolean;
  ESource?: boolean;
}

export interface ILoginRecord {
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
