import { getUserList } from "../services/home";

export default {

  namespace: 'login',

  state: {
    isShow: true,
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log('models start!') // eslint-disable-line
    },
  },

  effects: {
    *getlist({ payload }, { call, put }) {
      // eslint-disable-line
      const res = yield call(getUserList)
      console.log('res',res.data.list);
      yield put({
        type: 'changeList',
        payload: res.data.list
      })
    },
  },

  reducers: {
    show(state, action) {
      return { ...state, isShow: true };
    },
    hide(state, action) {
      return { ...state, isShow: false };
    },
    changeList(state, action) {
      return { ...state, list: action.payload }
    }
  },

};
