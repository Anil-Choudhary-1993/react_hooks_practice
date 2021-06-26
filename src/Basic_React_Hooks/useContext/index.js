import React from 'react';
import Context from './context';
import ParentComponent from './ParentComponent';

function UseContextComponent() {
  let [count, setCount] = React.useState(0);
  return (
    <React.Fragment>
      <h2>Context Provider</h2>
      <Context.Provider value={{ count, setCount }}>
        <ParentComponent />
      </Context.Provider>
    </React.Fragment>
  )
}

export default UseContextComponent;