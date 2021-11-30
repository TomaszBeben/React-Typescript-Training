import React, { useState } from 'react';
import FunctionComponent from './components/FunctionComponent'

import './App.css';

function App() {
  const [counter, setCounter] = useState<number>(0)
  return (
    <div className="App">
      {counter}
      <FunctionComponent increment={setCounter} />
    </div>
  );
}

export default App;
