import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
// import ProductList from '../components/ProductList'

const CountPage = ({ dispatch,count }) => {
  return (
    <div>
      <h2>Count of example</h2>
      <h2>{count}</h2>
      <Button onClick={()=>{dispatch({type:'count/add'})}}>+</Button>
      <Button onClick={()=>{dispatch({type:'count/minus'})}}>-</Button>
    </div>
  )

}
export default connect(({ count }) => ({
  count,
}))(CountPage);
