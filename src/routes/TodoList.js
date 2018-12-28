import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
// import ProductList from '../components/ProductList'

const TodoList = ({ dispatch,todos }) => {
  return (
    <div>
      <h2>Count of example</h2>
      <ul>
        {
          todos.list.map((i,index)=>{
            return <li key={index}>{i}  <Button onClick={()=>{dispatch({type:'todoList/deleteFn',payload:i})}}>delete</Button></li>
          })
        }
      </ul>
    </div>
  )

}

function mapStateToProps(state) {
  return { todos: state.todoList };
}
export default connect(mapStateToProps)(TodoList);

// export default connect(({ todoList }) => ({
//   todoList,
// }))(TodoList);
