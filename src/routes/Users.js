import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm,message } from 'antd';
import styles from './Users.css'
import { PAGE_SIZE } from '../constants';
// import MainLayout from '../components/MainLayout/MainLayout';

const Users = (props) => {
  function deleteHandler(id){
    props.dispatch({
      type:'users/deleteId',
      payload:id
    })
    message.success('delete success!')
  }
  function pageChangeHandler(page) {
    // console.log(page)
    props.dispatch({
      type:'users/fetch',
      payload:{page : page}
    })
  }
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
      title: 'Website',
      dataIndex: 'Website',
      key: 'Website',
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'city',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];
  return (
    <div className={styles.normal}>
      <div>
        <Table
          columns={columns}
          dataSource={props.list.list}
          loading={props.loading}
          rowKey={record => record.id}
          // pagination={false}
        />
        {/*<Pagination
          className="ant-table-pagination"
          total={props.total}
          current={props.page}
          onChange={pageChangeHandler}
          pageSize={PAGE_SIZE}
        />*/}
      </div>
    </div>
  )

}
function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    list,
    total,
    page,
    loading: state.loading.models.users,
  };
}

export default connect(mapStateToProps)(Users);
