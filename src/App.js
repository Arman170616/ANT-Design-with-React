import './App.css';
import React from 'react';
import { Form, Input, Button } from 'antd';




function App() {

  const onFinish = (values) => {
    console.log('Success:', values);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Form onFinish={onFinish}>
          <Form.Item label="User Name" name="username">
            <Input placeholder="User name" required></Input>
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Password" required></Input.Password>
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
