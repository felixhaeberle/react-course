import React, { Component } from "react";
import classes from "./Person.css";


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
	}

	render () {
		console.log('PersonJS inside render');

		return (
			<div className={classes.Person}>
				<p onClick={this.props.click}>Im {this.props.name} and Im {this.props.age} !</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</div>
		);
	}
}

export default Person;
