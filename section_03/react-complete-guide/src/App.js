import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons : [
      {name: "Felix", age: 22},
      {name: "David", age: 28},
      {name: "Sarah", age: 23}
    ],
    otherState: "an other state"
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name: newName, age: 28},
        {name: "Claus", age: 22},
        {name: "Vivien", age: 25}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React Developer</h1>
        <p>This is really working.</p>
        <button onClick={() => this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Louis")}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
