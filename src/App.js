import {  Button } from 'antd';
import './App.css';
import React from 'react';
// import { useState } from 'react';

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
      onClick={onButtonClick}
      >My First Button</Button>

      </header>
    </div>
  );
}

export default App;
