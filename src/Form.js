import React, { Component } from 'react';

const WhichExercise = props => (
      <label>
        I want to do
        <input value={props.answers.exercise} name="exercise" onChange={props.handleAnswerChange}/>
        starting at 
        <input value={props.answers.start_weight} type="number" name="start_weight" onChange={props.handleAnswerChange}/>
        lb.
      </label>
    )

const HowMuch = props => (
      <label>
        I want to do 
        <input 
          value={props.answers.sets}
          name="sets"
          type="number"
          onChange={props.handleAnswerChange}
        />
        sets of 
        <input
          value={props.answers.reps}
          name="reps"
          type="number"
          onChange={props.handleAnswerChange}
        />
        repetitions (reps). 
      </label>
);

export {WhichExercise, HowMuch};