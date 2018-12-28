import React from 'react';
import { Menu, Layout } from 'antd';
import _ from 'lodash'
import { Link } from 'dva/router';

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

const LayoutCom = ({ location,children }) => {
  return (
    <Layout>
      {/*<Menu
        // onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['/IndexPage']}
        defaultOpenKeys={[location.pathname]}
        mode="inline"
      >
        {
          _.map(router,(i,index)=>{
            return <Menu key={i.url} title={i.name}>
              <Link to={i.url}>i.name</Link>
            </Menu>
          })
        }
      </Menu>
      <Layout.Content>
        {children}
      </Layout.Content>*/}
    </Layout>
  );
}

export default LayoutCom;
