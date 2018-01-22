import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';


class App extends Component {
  state = {
    persons : [
      {name: "Felix", age: 22},
      {name: "David", age: 28},
      {name: "Sarah", age: 23}
    ],
    otherState: "an other state",
    showPersons: false,
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
