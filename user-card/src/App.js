import React from 'react';
import './App.css';

import Usercard from './components/Usercard'
import Followercard from './components/Followercard'

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
      .then(res => this.setState({followers : res}))
      .catch(err => console.log("Something goes wrong with followers"));
  }



  render() {


  return (
    

    <div className="App">
      <header className="App-header">
        <h2>Github Usercard App</h2>
      </header>
        <h1>Github user card</h1>
      <Usercard cards={this.state.cards}/>
        <h1>Followers list</h1>
      <Followercard followers={this.state.followers} />
    </div>
  );
  }
}

export default App;

