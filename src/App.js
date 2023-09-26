import './App.css';
import React from 'react';
import {Form, Input, Button} from 'antd';



function App() {


  const onFinish = (e) => {
    console.log(e);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form onFinish={onFinish}>
          <Form.Item label="User Name" name="username">
            <Input placeholder="Enter Your Name" required />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Enter Your Password" required />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">Log In</Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
