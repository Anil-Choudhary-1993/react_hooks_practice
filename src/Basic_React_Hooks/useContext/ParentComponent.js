import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <React.Fragment>
      <h2>Parent</h2>
      <ChildComponent />
    </React.Fragment>
  )
}


export default ParentComponent;