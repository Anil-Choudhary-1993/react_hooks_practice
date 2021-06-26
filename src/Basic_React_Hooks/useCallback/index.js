import React from 'react';


function InputComponent({ onClickHandler }) {
  console.log('renders input');
  return <button onClick={onClickHandler}>
    <h2>Cick</h2>
  </button>;
}

const Input = React.memo(InputComponent);

function UseCallbackComponent() {
  let [count, setCount] = React.useState(0);

  const onClickHandler = React.useCallback(() => setCount(prevCount => prevCount + 1), [setCount]);

  return (<React.Fragment>
    <Input onClickHandler={onClickHandler} />
    Count: {count}
  </React.Fragment>)
}

export default UseCallbackComponent;