import * as usersService from '../services/users';

const queryString = require('query-string');　

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1} }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({ type: 'save', payload: { data, total: parseInt(headers['x-total-count'], 10), page: parseInt(page, 10) } });
    },
    *deleteId({ payload }, { call, put,select }) {
      yield call(usersService.deleteId, payload)
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: {page:page} });
    },
    *editForm({ payload:{ id , values} }, { call, put,select }) {
      yield call(usersService.editForm, {id:id,values:values})
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: {page:page} });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: queryString.parse(query) });
        }
      });
    },
  },
};
