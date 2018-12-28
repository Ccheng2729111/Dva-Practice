import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
// import ProductList from '../components/ProductList'

const CountPage = ({ dispatch,countFn }) => {
  return (
    <div>
      <h2>Count of example</h2>
      <h2>{countFn}</h2>
      <Button onClick={()=>{dispatch({type:'countFn/add'})}}>+</Button>
      <Button onClick={()=>{dispatch({type:'countFn/minus'})}}>-</Button>
    </div>
  )

}
export default connect(({ countFn }) => ({
  countFn,
}))(CountPage);
