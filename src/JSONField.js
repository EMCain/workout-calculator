import React, { Component } from 'react';

class JSONField extends Component {
    constructor(props){
      super(props);
      this.state = {
        'program': props.program
      };
    }
  
   render() {
     const program = this.state.program;
     return (
       <textarea name='program_json' value={JSON.stringify(program, undefined, 4)}/>
     );
   }
}

export {JSONField};