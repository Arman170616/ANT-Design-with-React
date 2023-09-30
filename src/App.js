import './App.css';
import React from 'react';
import { Button, Spin } from 'antd';



function App() {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Spin spinning={loading}>
          <Button type="primary" onClick={() => setLoading(!loading)}>
            Toggle loading
          </Button>
        </Spin>

      </header>
    </div>
  );
}

export default App;
