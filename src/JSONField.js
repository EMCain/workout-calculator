import React, { Component } from 'react';

class JSONField extends Component {
    // constructor(props){
    //   super(props);
    //   this.state = {
    //     'program': props.program
    //   };
    // }
  
   render() {
     return (
       <textarea 
         id='program_json' 
         name='program_json' 
         // value={JSON.stringify(this.props.program, undefined, 4)}
         value={this.props.value}
         onChange={this.props.handleJSONChange.bind(this)}
         className={this.props.errors ? 'error' : ''}
        />
     );
   }
}

export {JSONField};