import { message } from 'antd';
import { Effect } from 'umi';

import {
  unbinding,
  updateBasic,
  updateBinding,
  updatePsd,
} from '@/services/profile';

export interface ModalState {}

export interface ModelType {
  namespace: string;
  state: ModalState;
  effects: {
    updateBasic: Effect;
    updateBinding: Effect;
    unbinding: Effect;
    updatePsd: Effect;
  };
}

const Model: ModelType = {
  namespace: 'profile',

  state: {},

  effects: {
    /**更新基本信息 */
    *updateBasic({ payload, callback }, { call, put }) {
      const res = yield call(updateBasic, payload);
      if (res?.code === 0) {
        message.success('更新成功');
        yield put({
          type: 'user/fetchCurrentUser',
        });
        if (callback) callback();
      } else {
        message.error(res.message);
      }
    },

    /**更新基本绑定信息 手机|邮箱 */
    *updateBinding({ payload, callback }, { call, put }) {
      const res = yield call(updateBinding, payload);
      if (res?.code === 0) {
        message.success('更新成功');
        yield put({
          type: 'user/fetchCurrentUser',
        });
        if (callback) callback();
      } else {
        message.error(res.message);
      }
    },

    /**解除绑定 手机|邮箱 */
    *unbinding({ payload, callback }, { call, put }) {
      const res = yield call(unbinding, payload);
      if (res?.code === 0) {
        message.success('解除绑定成功');
        yield put({
          type: 'user/fetchCurrentUser',
        });
        if (callback) callback();
      } else {
        message.error(res.message);
      }
    },

    /**更新密码 */
    *updatePsd({ payload, callback }, { call, put }) {
      const res = yield call(updatePsd, payload);
      if (res?.code === 0) {
        message.success('更新成功');
        yield put({
          type: 'user/fetchCurrentUser',
        });
        if (callback) callback();
      } else {
        message.error(res.message);
      }
    },
  },
};

export default Model;
