import { message } from 'antd';
import Cookies from 'js-cookie';
import { Effect, history } from 'umi';

import { clientId } from '@/constants/global';
import { login, register, resetPsd } from '@/services/login';

export interface ModalState {}

export interface ModelType {
  namespace: string;
  state: ModalState;
  effects: {
    login: Effect;
    logout: Effect;
    register: Effect;
    resetPsd: Effect;
  };
}
const Model: ModelType = {
  namespace: 'login',

  state: {},

  effects: {
    /**登陆 */
    *login({ payload }, { call }) {
      const res = yield call(login, { clientId, ...payload });
      if (res?.code === 0) {
        if (payload.redirectUrl) {
          location.href = `${payload.redirectUrl}?access_token=${res.data.token}`;
        } else {
          history.push('/profile');
        }
        Cookies.set('access_token', res.data.token);
      } else {
        message.error(res.message);
      }
    },
    /**登出 */
    *logout(_, { all, put }) {
      Cookies.remove('access_token');
      Cookies.remove('refresh_token');
      localStorage.clear();

      yield all([put({ type: 'user/reset' }), put({ type: 'project/reset' })]);

      history.push('/');
      window.location.reload();
    },
    /**注册 */
    *register({ payload }, { call }) {
      const res = yield call(register, { clientId, ...payload });
      if (res?.code === 0) {
        Cookies.set('access_token', res.data.token);
        history.push('/profile');
      } else {
        message.error(res.message);
      }
    },
    /**重置密码 */
    *resetPsd({ payload }, { call }) {
      const res = yield call(resetPsd, payload);
      if (res?.code === 0) {
        message.success('密码已重置');
        history.push('/login');
      } else {
        message.error(res.message);
      }
    },
  },
};

export default Model;
