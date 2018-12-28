
export default {

  namespace: 'todoList',

  state: {
    list:['第一条数据','第二条数据','第三条数据']
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *deleteFn({ payload }, { call, put }) {  // eslint-disable-line
      console.log(payload)
      // let delay = setTimeout(()=>console.log(1),1000)
      const delay = (timeout) => {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      };
      yield call( delay,1000)
      yield put({ type: 'delete',payload:payload });
    },
  },

  reducers: {
    delete(state,action) {
      return Object.assign({},state,{list:state.list.filter(item=>item!==action.payload)});
    },
  },

};
