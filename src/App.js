import './App.css';
import React from 'react';
import { Form, Input, Button, message, Alert } from 'antd';





function App() {
  const [showAlert, setShowAlert] = React.useState(false);
  const onFinish = (values) => {
    console.log(values);
    
    setTimeout(() => {
      setShowAlert(true);
    }, 1000);
  };

  return (
    <div className="App">
      <header className="App-header">
        {showAlert && 
        <Alert message="Login Success" 
        type="success" 
        showIcon 
        closable
        />}
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
