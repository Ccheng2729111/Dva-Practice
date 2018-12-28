import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
import IndexPage from './routes/IndexPage';

function RouterConfig({ history, app }) {
  const Products = dynamic({
    app,
    models: () => [
      import('./models/products'),
    ],
    component: () => import('./routes/Products')
  })
  const CountPage = dynamic({
    app,
    models: () => [
      import('./models/counts'),
    ],
    component: () => import('./routes/CountPage')
  })
  const User = dynamic({
    app,
    models: () => [
      import('./models/users'),
    ],
    component: () => import('./routes/Users')
  })
  const TodoList = dynamic({
    app,
    models: () => [
      import('./models/todoList'),
    ],
    component: () => import('./routes/TodoList')
  })
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Products" exact component={Products} />
        <Route path="/CountPage" exact component={CountPage} />
        <Route path="/users" exact component={User} />
        <Route path="/TodoList" exact component={TodoList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
