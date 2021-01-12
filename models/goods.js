export default {
  namespace: 'goods',
  state: [{
    title: 'Java'
  }, {
    title: '前端'
  }],
  effects: {},
  reducers: {
    addGood(state, action) {
      return [...state, { title: action.payload.title }]
    }
  }
}