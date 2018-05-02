import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './modules/NavBar.js';
import ScoreBoard from './modules/ScoreBoard.js';
import MatchList from './modules/MatchList.js';
import matches from './data/matches.json';
import users from './data/users.json';

class App extends Component {
  state = {
    matches : {},
    users : {},
  }
  componentWillMount() {
    this.setState({matches: matches.matches,
                    users: users.users});
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="row">
          <MatchList matches={this.state.matches} />
          <ScoreBoard users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
