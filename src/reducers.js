const formReader = (state = 0, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE': 
      console.log("an input was changed");
      return state; 
    case 'TEXTAREA_CHANGE': 
      console.log("the textarea was changed");
      return state;
    default: 
      return state;
  }
}

import createStore from 'redux';

const store = createStore(formReader);

function readInputs () {
  // TODO read the inputs and turn their values into a js obj
  return {};
}

let currentJSON;
const handleChange = () => {
  // https://redux.js.org/docs/api/Store.html#subscribe
  let previousJSON = currentJSON;
  currentJSON = readInputs(store.getState())
  
  if (previousJSON !== currentJSON) {
    console.log("JSON changed from " + previousJSON + " to " + currentJSON); 
  }
  
  
}