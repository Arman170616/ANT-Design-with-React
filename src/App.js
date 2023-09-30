import './App.css';
import React from 'react';
import { Button, Spin } from 'antd';



function App() {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Spin spinning={loading}></Spin>
        <Button type="primary" onClick={() => setLoading(!loading)}>Toggle loading</Button>
        <Spin spinning={loading} tip="Loading...">
          <div style={{ width: 200, height: 200, backgroundColor: '#ccc' }}></div>
        </Spin>

      </header>
    </div>
  );
}

export default App;
