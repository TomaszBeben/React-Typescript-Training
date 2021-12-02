import React, { useState, } from 'react';
import FunctionComponent from './components/FunctionComponent'
import Header from './components/Header';

import './App.css';
import HooksTraining from './components/HooksTraining';


function App() {
  const [counter, setCounter] = useState < number > (0)

  return (
    <div className="App">
      <div style={{ width:'100px'}}>
        <Header counter={counter} />
        <FunctionComponent increment={setCounter} />
      </div>
      <div>--------------------------------------------------</div>
      <HooksTraining />
    </div>
  );
}

export default App;
