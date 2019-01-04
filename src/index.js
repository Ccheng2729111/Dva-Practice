import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

window._ = require('lodash')
// 1. Initialize
// import createHistory from 'history/createBrowserHistory';
const app = dva({
  initialState:{
    products:[
      {name:'dva',id:1},
      {name:'antd',id:2}
    ],
    count:0
  },
  // onStateChange:(e)=>console.log(e),             //监听所有store state变化。
});

// 2. Plugins
app.use(createLoading());

// 3. Model

// const models=[products,counts,users,todoList];

// models.forEach(m=>app.model(m))
// app.model(require('./models/counts').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
