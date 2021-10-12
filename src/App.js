import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
// a class has a property -> as a variable of a class
//there is a property you have with every component extended from Class Component => state : managed inside the componenet / not available in function components
//u should use state with care (?)

class  App extends Component {
  state = {
    persons: [
      { name : 'Max', age :'28'},
      { name : 'Selma', age :'26'},
      { name : 'Jinene', age :'23'}
    ]
  }

  switchNameHandler = (newName) => {
   // console.log('was clicked');

   //DON'T DO THIS : this.state.persons[0].name = "Maximum"
   this.setState({
     persons: [
    { name : newName, age :'28'},
    { name : 'Selma', age :'26'},
    { name : 'Jinene', age :'22'}
  ]

 } )
  }

NameChangeHandler = (event) => {
    this.setState({
    persons: [
   { name : 'Max', age :'28'},
   { name : event.target.value, age :'26'},
   { name : 'Jinene', age :'23'}
 ]

} )
 }
  render(){
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return ( 
      //it's not html but jsx 
    <div className="App">
      <h1> I am a react app. </h1>
      <p> this is really working</p>
      
      <button 
        style={style}
        onClick={ () => this.switchNameHandler('Maximillian !!')}> Switch Name </button>
      <Person 
        name= {this.state.persons[0].name} 
        age={this.state.persons[0].age} />
      <Person 
      name= {this.state.persons[1].name} 
      //use bind it's better
      click={this.switchNameHandler.bind(this, 'Max!')}
      changed={this.NameChangeHandler}
      age={this.state.persons[1].age}> 
      My Hobbies : Swimming </Person> 
      <Person 
      name= {this.state.persons[2].name} 
      age={this.state.persons[2].age}> </Person> 

    </div>
    );
   //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'does this work now'));
   
  
}
}

export default App;
