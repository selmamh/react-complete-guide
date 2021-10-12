// acomponent if a funciton which return jsx AKA html
//we are using ES6 syntax ().)
// we need to import react

import React from 'react';
import './Person.css';
 

const person = (props) =>{
    //return <p>I am a person and I am {Math.floor(Math.random() * 30)} years old! </p>
    return (
        <div className="Person">
    <p onClick={props.click}>I am {props.name} and I am {props.age} years old! </p>
    <p> {props.children}</p>
    <input type="text" onChange={props.changed} value = {props.name}/>
    </div>
    )
};


export default person;