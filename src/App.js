import React, { Component } from 'react';
import GithubUserInfo from './GithubUserInfo';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newUsername) {
    this.setState(newUsername);
  }

  render() {
    return (
      <div className="App">
        <Form updateUser={this.handleSubmit} />
        <GithubUserInfo username={this.state.username} />
      </div>
    );
  }
}

export default App;
