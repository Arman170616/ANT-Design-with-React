import './App.css';
import React from 'react';
import { DatePicker, TimePicker } from 'antd';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <DatePicker/>
        <DatePicker.RangePicker/>
        <TimePicker.RangePicker/>

      </header>
    </div>
  );
}

export default App;
