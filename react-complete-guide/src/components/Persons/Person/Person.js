import React, { Component } from "react";
import PropTypes from 'prop-types';
import classes from "./Person.css";
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';


class Person extends Component {
	constructor(props) {
		super(props);
		console.log('PersonJS inside constructor', props);
	}

	componentWillMount() {
		console.log('PersonJS inside componentWillMount');
	}

	componentDidMount() {
		console.log('PersonJS inside componentDidMount');
		if(this.props.position === 0) {
			this.inputElement.focus();
		}
	}

	render () {
		console.log('PersonJS inside render');

		return (
			<Aux>
				<p onClick={this.props.click}>Im {this.props.name} and Im {this.props.age} !</p>
				<p>{this.props.children}</p>
				<input
					ref={(inp) => { this.inputElement = inp }}
					type="text"
					onChange={this.props.changed}
					value={this.props.name} />
			</Aux>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
}

export default withClass(Person, classes.Person);
