import React from 'react';
import useWhyDidUpdate from '../Custom_Hooks/useWhyDidUpdate';


const Counter = React.memo((props) => {
  useWhyDidUpdate('Counter', props);
  console.log('component updating counter')
  return <div style={props.style}>{props.text}</div>
});

export default function UseWhyDidUpdateComponent() {
  let [count, setCount] = React.useState(0);

  // Reemove use memo to see counter component is re-rendering on each re-render 
  const style = React.useMemo(() => ({
    backgroundColor: 'red',
    color: 'white',
    fontSize: "28px"
  }), []);

  return (
    <React.Fragment>
      <button style={{ padding: '10px', fontSize: '28px', margin: '10px' }} onClick={() => setCount(count + 1)}>Increment {count}</button>
      <Counter text={'Counter'} style={style} />
    </React.Fragment>
  )
}
