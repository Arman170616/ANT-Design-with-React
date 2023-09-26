import {  Button, Space, DatePicker } from 'antd';
import './App.css';
import React from 'react';
import { PoweroffOutlined } from '@ant-design/icons';

function App() {

  const [loading, setLoading] = React.useState(false);
  const onButtonClick = (e) => {
    alert('click');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
  return (
    <div className="App" style={{ padding: '0 24px' }}>
      <header className="App-header">
      
      <Button 
      type="primary" 
      
      loading={loading}
      icon={<PoweroffOutlined />}
      className='my-button'
      
      onClick={onButtonClick}
      >My First Button</Button>
      <Space>
        <DatePicker />
        <DatePicker picker="week" />
        <DatePicker picker="month" />
        <DatePicker picker="quarter" />
        <DatePicker picker="year" />
        
      </Space>

      </header>
    </div>
  );
}

export default App;
