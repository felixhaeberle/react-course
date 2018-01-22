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

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name: "Felix", age: 22},
        {name: event.target.value, age: 28},
        {name: "Sarah", age: 23}
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({person: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
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
