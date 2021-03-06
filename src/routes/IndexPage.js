import React from 'react';
import {Button} from 'antd'
import { connect } from 'dva';
import styles from './IndexPage.css';
import { routerRedux } from 'dva/router';
// import MainLayout from '../components/MainLayout/MainLayout';

const IndexPage =({location ,dispatch}) =>{
  function goTodo(){
    dispatch(routerRedux.push({
      pathname: '/TodoList',
    }));
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <Button onClick={goTodo}>Antd</Button>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
