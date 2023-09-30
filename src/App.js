import './App.css';
import React from 'react';
import { Progress } from 'antd';



function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Progress percent={30} status='active' />
        <Progress percent={33} type='circle' />
        <Progress percent={33} type='line' strokeColor='red' status='active' />
        <Progress percent={33} type='line' strokeColor='red' strokeWidth={50} status='active' steps={3} />





      </header>
    </div>
  );
}

export default App;
