import React, { Component } from 'react';
import {JSONField} from './JSONField.js'
import {WhichExercise} from './Form.js';
import logo from './logo.svg';
import './App.css';

import sampleProgram from './sample-program.json';


class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'program': props.program
    }
  }
  
  handleAnswerChange(fieldset_id) {
    // TODO generalize this
    let fieldset = document.getElementById(fieldset_id); 
    if (!fieldset) {
      return;
    }
    let section = fieldset.dataset.section;
    let section_data = {};

    let program = this.state.program;
    
    // child elements within the fieldset (double nesting because React is weird)
    let children = [...fieldset.children[0].children];
    
    children.forEach(function(child) {
      if (child instanceof HTMLInputElement) {
          section_data[child.name] = child.value;
      }
    });
    program[section] = section_data;

    this.setState({
        'program': program
    });
    console.log(this.state);
  }
  
  render() {
    return (
      <div className="whatever">
        <fieldset id="which_exercise" data-section="which_exercise">
          <WhichExercise
            answers={this.state.program.which_exercise}
            handleAnswerChange={this.handleAnswerChange.bind(this)}
          />
        </fieldset>
        <JSONField program={this.state.program}/>
      
      </div>
    );
  }
}

class App extends Component {
  render () {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <Workout program={sampleProgram}/>
        </div>
    );
  }
}

export default App;
