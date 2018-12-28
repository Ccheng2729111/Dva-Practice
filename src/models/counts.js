export default {
  namespace: 'countFn',
  state: 1,
  reducers: {
    add  (count) { return count + 1 },
    minus(count) { return count - 1 },
  },
};
