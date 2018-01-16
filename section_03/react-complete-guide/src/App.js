import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React Developer</h1>
        <p>This is really working.</p>
        <Person name="Felix" age="22"/>
        <Person name="Sven" age="23">My hobby is biking.</Person>
        <Person name="David" age="21"/>
      </div>
    );
  }
}

export default App;
