import React from 'react';
import './App.css';

import Usercard from './components/Usercard'

class App extends React.Component {

    constructor() {
    super()
    this.state = {
        cards : [],
        followers : []
    };
}

  
  componentDidMount() {
    fetch("https://api.github.com/users/shweps13")
      .then(res => res.json())
      .then(res => this.setState({cards : res}))
      .catch(err => console.log("Something goes wrong with main request"));
    fetch("https://api.github.com/users/shweps13/followers")
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => this.setState({followers : res}))
      .catch(err => console.log("Something goes wrong with followers"));
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

