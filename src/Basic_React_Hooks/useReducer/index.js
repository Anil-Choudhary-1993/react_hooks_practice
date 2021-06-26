import React from 'react';
import reducer from './reducer';
import { increment, decrement, reset } from './actions';

function UseReducerComponent() {

  let [state, dispatch] = React.useReducer(reducer, { count: 0 });

  return (
    <React.Fragment>
      <button onClick={() => dispatch(increment())}><h1>+</h1></button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch(decrement())}><h1>-</h1></button>
      <button onClick={() => dispatch(reset())}><h1>Reset</h1></button>
    </React.Fragment>
  )
}

export default UseReducerComponent;
