import React, { Component } from 'react';

class Question extends Component {
  handleChange(event) {
    console.log('event target', event.target);
    this.props.handleAnswerChange(event.target.parentNode.parentNode.id);
  }
}

class WhichExercise extends Question {

  render () {
    const unit = 'lb'; // TODO user should set this globally (not per exercise) 
    return (
      <label>
        I want to do
        <input value={this.props.answers.exercise} name="which_exercise" onChange={this.handleChange.bind(this)}/>
        starting at 
        <input value={this.props.answers.start_weight} type='number' name='start_weight' onChange={this.handleChange.bind(this)}/>
        {unit}
      </label>
    );
  }
}

export {Question, WhichExercise};