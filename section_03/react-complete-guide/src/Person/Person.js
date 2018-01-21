import React from "react";

import './Person.css';

const person = (props) => {
  return (
    <div className="Person littlePerson">
      <p onClick={props.click}>Im {props.name} and Im {props.age} !</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person
