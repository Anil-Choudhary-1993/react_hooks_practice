import React from 'react';

function UseRefComponent() {
  let [count, setCount] = React.useState(0);
  let inputRef = React.useRef();

  React.useEffect(() => {
    // inputRef?.current?.focus();
    inputRef.current.style.border = `${count}px solid yellow`;
  }, [count])

  return (
    <React.Fragment>
      <input type="number" value={count} ref={inputRef} />
      <button onClick={() => setCount(count + 1)}>Click</button>
    </React.Fragment>
  )
}

export default UseRefComponent;
