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
      'program': props.program,
      'programJSON': JSON.stringify(props.program, undefined, 4),
      'JSONerrors': false
    }
  }
  
  handleAnswerChange(fieldset_id) {
    const fieldset = document.getElementById(fieldset_id); 
    if (!fieldset) return;
    
    const section = fieldset.dataset.section;
    let section_data = {};

    let program = this.state.program;
    
    // child elements within the fieldset (double nesting because React is weird)
    const children = [...fieldset.children[0].children];
    
    children.forEach(function(child) {
      if (child instanceof HTMLInputElement) {
          section_data[child.name] = child.value;
      }
    });
    program[section] = section_data;

    this.setState({
        'program': program,
        'programJSON': JSON.stringify(program, undefined, 4)
    });
  }

  handleJSONChange() {
    const json = document.getElementById('program_json'); 
    if (!json) return;
    
    try {
      const program = JSON.parse(json.value);
      this.setState({
        'program': program,
        'JSONerrors': false
      });
    } catch (e) {
      this.setState({
        // If JSON is invalid, don't try to set program based on it
        'JSONerrors': e.message
      });
    } finally {
      this.setState({
        'programJSON': json.value
      })
    }
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
        <JSONField 
          value={this.state.programJSON} 
          errors={this.state.JSONerrors}
          handleJSONChange={this.handleJSONChange.bind(this)}
        />
        {this.state.JSONerrors && 
          <label for="program_json" className="error">
            Make sure you end up with a valid input format to avoid these errors:
             <br/>
            {this.state.JSONerrors}
          </label>
        }
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
