// eslint-disable react/prefer-stateless-function
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function GreeterComponent({ match }) {
  return <h1>Hello, {match.params.person}</h1>;
}
class App extends Component {
  constructor() {
    super();
    this.state = { services: [] };
  }
  componentDidMount() {
    axios.get('/api/me.json')
      .then((response) => {
        this.setState({ me: response.data });
      });
    axios.get('/api/services.json')
      .then((response) => {
        this.setState({ services: response.data });
      });
  }
  render() {
    const userInfoSection = this.state.me ? <h1>{this.state.me.name}</h1> : <h1>No User</h1>;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {userInfoSection}
        <Route
          path="/banana-sandwich"
          render={() => <h1>Banananananananana!!!</h1>}
        />
        <Route
          path="/"
          render={props => (<div>
            <p>{Object.keys(props).join(', ')}</p>
            <p>{Object.keys(props.match).join(', ')}</p>
            <p>{Object.keys(props.location).join(', ')}</p>
            <p>{props.match.path}</p>
          </div>)}
        />
        <Route
          path="/greet/:person"
          component={GreeterComponent}

        />
      </div>
    );
  }
}

export default App;
