import React from 'react';
import logo from './logo.svg';
import { ReactComponent as ReactLogo } from  './logo.svg';
import { ReactComponent as Delete } from  './Delete.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="ButtonIcon"><Delete/></button>
        <button className="ButtonIcon"><Delete/></button>
        <button className="ButtonIcon"><Delete/></button>
      </header>
    </div>
  );
}

export default App;
