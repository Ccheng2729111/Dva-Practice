import React from 'react';
import { Router, Route,Redirect} from 'dva/router';
import LayoutCom from './routes/LayoutCom'

function RouterConfig(props) {
  console.log(props)
  return (
    <Router history={props.history}>
      <Route path="/"  render={()=><LayoutCom {...props}/>} />
    </Router>

  );
}

export default RouterConfig;
