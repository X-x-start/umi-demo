import { message } from 'antd';
import { Effect, Reducer } from 'umi';

import { fetchCurrentUser } from '@/services/user';
import { IUser } from '@/types/user';

export interface ModalState {
  userInfo?: IUser;
  isUserBindEmail?: boolean;
}

export interface ModelType {
  namespace: string;
  state: ModalState;
  effects: {
    fetchCurrentUser: Effect;
  };
  reducers: {
    updateUserInfo: Reducer;
    updateUserBindEmailStatus: Reducer;
  };
}

const Model: ModelType = {
  namespace: 'user',

  state: {
    isUserBindEmail: false,
  },

  effects: {
    /**查询当前用户详情 */
    *fetchCurrentUser({ payload }, { call, put }) {
      const res = yield call(fetchCurrentUser, payload);
      if (res?.code === 0) {
        if (res.data) {
          yield put({
            type: 'updateUserInfo',
            payload: res.data,
          });
          if (!res.data.email) {
            yield put({
              type: 'updateUserBindEmailStatus',
              payload: true,
            });
          } else {
            yield put({
              type: 'updateUserBindEmailStatus',
              payload: false,
            });
          }
          localStorage.setItem('user', res.data.username);
        }
      } else {
        message.error(res.message);
      }
    },
  },

  reducers: {
    updateUserInfo(state, { payload }) {
      return {
        ...state,
        userInfo: payload,
      };
    },
    updateUserBindEmailStatus(state, { payload }) {
      return {
        ...state,
        isUserBindEmail: payload,
      };
    },
  },
};

export default Model;
