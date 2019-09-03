import React from 'react';
import './App.css';

import Usercard from './components/Usercard'

class App extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    fetch("https://api.github.com/users/shweps13")
      .then(res => res.json())
      .then(res => {console.log(res)})
      .catch(err => console.log("noooo"));
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

