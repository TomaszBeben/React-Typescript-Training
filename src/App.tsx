import React, { useState, } from 'react';
import FunctionComponent from './components/FunctionComponent'
import Header from './components/Header';

import './App.css';
import HooksTraining from './components/HooksTraining';
import UseReducerHook from './components/UseReducerHook';


const App = () => {
  const [counter, setCounter] = useState < number > (0)

  return (
    <div className="App">
      <div>--------------------------------------------------</div>
      <div>-------------    useState, Props    --------------</div>
      <div style={{ width:'100px'}}>
        <Header counter={counter} />
        <FunctionComponent increment={setCounter} />
      </div>
      <div>--------------------------------------------------</div>
      <div>-------------       useEffect       --------------</div>
      <HooksTraining/>
      <div>--------------------------------------------------</div>
      <div>-------------       useReducer       -------------</div>
      <UseReducerHook/>
    </div>
  );
}

export default App;
