import React, { Component } from 'react';
import './App.css';
import NavBar from './modules/NavBar.js';
import ScoreBoard from './modules/ScoreBoard.js';
import MatchList from './modules/MatchList.js';
import matches from './data/matches.json';
import users from './data/users.json';
import user from './data/user.json';
import Header from './modules/Header.js';

class App extends Component {
  state = {
    matches : {},
    users : {},
    user : {}
  }
  componentWillMount() {
    this.setState({matches: matches.matches,
                    users: users.users,
                    user: user.user});
  }
  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user}/>
        <Header />
        <div className="row">
          <MatchList matches={this.state.matches} />
          <ScoreBoard users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
