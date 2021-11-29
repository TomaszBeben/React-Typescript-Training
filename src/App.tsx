import React from 'react';
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'

import './App.css';


function App() {
  return (
    <div className="App">
      <ClassComponent value={5} />
      <FunctionComponent value={12} />
    </div>
  );
}

export default App;
