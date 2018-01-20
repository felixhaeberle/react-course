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
        {name: newName, age: 22},
        {name: "David", age: 28},
        {name: "Sarah", age: 23}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name: "Felix", age: 22},
        {name: event.target.value, age: 28},
        {name: "Sarah", age: 23}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React Developer</h1>
        <button onClick={() => this.switchNameHandler("Pascal")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Louis")}
          changed={this.nameChangedHandler}
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
