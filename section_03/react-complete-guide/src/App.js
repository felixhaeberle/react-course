import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';


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

  nameChangedHandler = ( event ) => {
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
    this.setState({ showPersons: !doesShow});
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
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Louis')}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
