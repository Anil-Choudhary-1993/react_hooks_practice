import React from 'react';
import Context from './context';

function ChildComponent() {
  const { count, setCount } = React.useContext(Context);

  return (
    <React.Fragment>
      <h2>Child</h2>
      <input type="number" value={count} />
      <button onClick={() => setCount(count + 1)}>Click</button>
    </React.Fragment>
  )
}

export default ChildComponent;