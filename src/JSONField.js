import React, { Component } from 'react';

const JSONField = props => (
       <textarea 
         id='program_json' 
         name='program_json' 
         value={props.value}
         onChange={props.handleJSONChange}
         className={props.errors ? 'error' : ''}
        />
     );

export {JSONField};