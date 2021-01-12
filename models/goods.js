import axios from 'axios';

function getGoods() {
  return axios.get('/api/goods');
}

export default {
  namespace: 'goods',
  state: [],
  effects: {
    // 异步操作
    *getList(action, { call, put }) {
      const ret = yield call(getGoods);
      yield put({ type: 'initGoods', payload: ret.data.result });
    }
  },
  reducers: {
    initGoods(state, action) {
      return action.payload;
    },
    addGood(state, action) {
      return [...state, { title: action.payload.title }]
    }
  }
}