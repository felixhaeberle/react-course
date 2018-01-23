import React, { Component } from 'react';

import classes from './App.css';

import Cockpit from '../components/Cockpit/Cockpit';

import Persons from '../components/Persons/Persons';
import Person from '../components/Persons/Person/Person';
import '../components/Persons/Person/Person.css';

class App extends Component {
  state = {
    persons : [
      {id: 'fdgdfg', name: "Felix", age: 22},
      {id: 'nhggh', name: "David", age: 28},
      {id: 'gbdbgb', name: "Sarah", age: 23}
    ],
    otherState: "an other state",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
