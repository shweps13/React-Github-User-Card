import React from 'react';
import logo from './logo.svg';
import './App.css';

import Usercard from './components/Usercard'

class App extends React.Component {

  constructor() {
    super();
  }


  render() {
  return (
    
    <div className="App">
      <header className="App-header">
        <h2>Github Usercard App</h2>
      </header>
      <Usercard />
    </div>
  );
  }
}

export default App;

