import React from 'react';
import './App.css';

import Usercard from './components/Usercard'

class App extends React.Component {

    constructor() {
    super()
    this.state = {
        cards : []
    };
}

  
  componentDidMount() {
    fetch("https://api.github.com/users/shweps13")
      .then(res => res.json())
      .then(res => this.setState({cards : res}))
      .catch(err => console.log("Something goes wrong"));
  }



  render() {


  return (
    

    <div className="App">
      <header className="App-header">
        <h2>Github Usercard App</h2>
      </header>
      <Usercard cards={this.state.cards}/>
    </div>
  );
  }
}

export default App;

