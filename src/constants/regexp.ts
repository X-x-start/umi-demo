export const EMAIL_REGEXP =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
export const EMAIL_REGEXP_MSG = '邮箱格式有误，请修改！';

export const PHONE_REGEXP = /^1[3-9]\d{9}$/;
export const PHONE_REGEXP_MSG = '手机号格式错误！';

export const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,}$/;
export const PASSWORD_REGEXP_MSG =
  '密码最少需要6个字符，必须包含数字及大小写英文！';
