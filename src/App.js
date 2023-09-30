import './App.css';
import React, { useEffect } from 'react';
import { Table } from 'antd';
  




function App() {
  const [loading, setLoading] = React.useState(false);
  const [dataSource, setDataSource] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setDataSource(data)
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        console.log('finally')
        setLoading(false)
      })
  }, [])
  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'User Id',
      dataIndex: 'userId',
      sorter: (record1, record2) => record1.userId > record2.userId,
    },
    {
      key: '3',
      title: 'Status',
      dataIndex: 'completed',
      render: (completed) => {
        return completed ? 'Completed' : 'Not Completed'
      },
      // sorter: (record1, record2) => 
      // record1.completed > record2.completed,
      filters: [
        {
          text: 'Completed',
          value: true,
        },
        {
          text: 'Not Completed',
          value: false,
        },
      ],
      onFilter: (value, record) => {
        return record.completed === value
      }

    },

  ]
  return (
    <div className="App">
      <header className="App-header">
        <p style={{backgroundColor:'black'}}>Todo Status by User</p>
        <Table 
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          current: page,
          pageSize: pageSize,
          total: dataSource.length,
          onChange: (page, pageSize) => {
            setPage(page)
            setPageSize(pageSize)
          }
        }}


        ></Table>


      </header>
    </div>
  );
}

export default App;
