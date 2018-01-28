import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('PersonsJS inside constructor', props);
  }

  componentWillMount() {
    console.log('PersonsJS inside componentWillMount');
  }

  componentDidMount() {
    console.log('PersonsJS inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('PersonsJS inside componentWillRecieveProps', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('PersonsJS inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('PersonsJS inside componentDidUpdate');
  }

  render () {
    console.log('PersonsJS inside componentDidMount');

    return this.props.persons.map( ( person, index ) => {
        return <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}/>
        } );
  }
}

export default Persons;
