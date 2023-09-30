import './App.css';
import React from 'react';
import { Table } from 'antd';





function App() {
  const data = [
  {
    name :'John',
    age  :32,
    address : 'New York No. 1 Lake Park',
    key:'1'
  },
  {
    name :'Kabir',
    age  :13,
    address : 'New York No. 1 Lake Park',
    key:'2'
  },
  {
    name :'Ahmed',
    age  :50,
    address : 'New York No. 1 Lake Park',
    key:'3'
  },
  // {
  //   name :'Kadr',
  //   age  :100,
  //   address : 'New York No. 1 Lake Park',
  //   key:'3'
  // },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'key',
    render: name =>{
      return <a>{name}</a>
    }

  },

  {
    title: 'Age',
    dataIndex: 'age',
    key: 'key',
    sorter: (a, b) => a.age - b.age,
  },

  {
    title: 'Address',
    dataIndex: 'address',
    key: 'key',
  },
  {
    title: 'Is Graduated',
    key: 'key',
    render: payload =>{
      return <p>{payload.age>20?'Yes':'No'}</p>
    }
  },
]

  return (
    <div className="App">
      <header className="App-header">
        <Table
          dataSource = {data}
          columns = {columns}

        ></Table>



      </header>
    </div>
  );
}

export default App;
