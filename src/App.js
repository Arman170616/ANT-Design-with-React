import {  Button } from 'antd';
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
    <div className="App">
      <header className="App-header">
      
      <Button 
      type="primary" 
      block
      loading={loading}
      icon={<PoweroffOutlined />}
      style={{backgroundColor: 'skyblue', color: 'white'}}
      onClick={onButtonClick}
      >My First Button</Button>

      </header>
    </div>
  );
}

export default App;
