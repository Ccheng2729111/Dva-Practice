import React, {Component} from 'react';
import style from './LayoutStyle.css';
import { Menu, Layout } from 'antd';
import _ from 'lodash'
import { Link } from 'dva/router';
import IndexPage from "./IndexPage";
import dynamic from "dva/dynamic";
import {Route, Switch } from 'dva/router';
import PropTypes from 'prop-types';
const router = [{
  name:'计数器',
  url:'/CountPage'
},{
  name:'列表分页',
  url:'/users'
},{
  name:'TODOList',
  url:'/TodoList'
},{
  name:'Product',
  url:'/Products',
},{
  name:'IndexPage',
  url:'/IndexPage'
}]
class LayoutCom extends Component {
  constructor(props){
    super(props);
    this.state = {
      app:props.app,
      history:props.history
    }
  }
  componentDidMount(){
    //设置初始跳转页面 indexPage
    if(this.state.history.location.pathname === '/'){
      this.props.history.push('/IndexPage')
    }
  }
  render() {
    const { app,history } = this.state
    const Products = dynamic({
      app,
      models: () => [
        import('../models/products'),
      ],
      component: () => import('../routes/Products')
    })
    const CountPage = dynamic({
      app,
      models: () => [
        import('../models/counts'),
      ],
      component: () => import('../routes/CountPage')
    })
    const User = dynamic({
      app,
      models: () => [
        import('../models/users'),
      ],
      component: () => import('../routes/Users')
    })
    const TodoList = dynamic({
      app,
      models: () => [
        import('../models/todoList'),
      ],
      component: () => import('../routes/TodoList')
    })
    return (
      <Layout className={style.layoutStyle}>
        <Menu
          // onClick={handleClick}
          style={{ width: 256 ,height:'100%'}}
          // selectedKeys={history.location.pathname==='/'?'/IndexPage':history.location.pathname}
          defaultSelectedKeys={['/IndexPage']}
          mode="inline"
        >
          {
            _.map(router,(i,index)=>{
              return <Menu.Item key={index} title={i.name}>
                <Link to={i.url}>{i.name}</Link>
              </Menu.Item>
            })
          }
        </Menu>
        <Layout.Content>
          <Switch>
            <Route path="/IndexPage"  component={IndexPage} />
            <Route path="/Products"  component={Products} />
            <Route path="/CountPage"  component={CountPage} />
            <Route path="/users"  component={User} />
            <Route path="/TodoList"  component={TodoList} />
          </Switch>
        </Layout.Content>
      </Layout>
    )
  }
}
LayoutCom.contextTypes = {
  router: PropTypes.object.isRequired
}

export default LayoutCom;
