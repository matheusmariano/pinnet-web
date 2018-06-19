import { Component } from 'react';

export default class HomeScreen extends Component {
  state = {
    name: 'app',
  };

  render() {
    return (
      <h1>Welcome to {this.state.name}</h1>
    );
  }
}
