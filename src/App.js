import './App.css';
import React from 'react';
import {Select} from 'antd';



function App() {
  const fruits = ['Apple', 'Orange', 'Banana', 'Pear'];

  return (
    <div className="App">
      <header className="App-header">
      <p> Which is your favorite fruit?</p>
      <Select 
      mode='multiple' 
      maxTagCount={2}
      placeholder='Select Fruit' 
      style={{width:'20%'}}>
        
        {fruits.map((fruit, index) => (
          <Select.Option key={index} value={fruit}>
            {fruit}
          </Select.Option>
        ))}

      </Select>


      </header>
    </div>
  );
}

export default App;
