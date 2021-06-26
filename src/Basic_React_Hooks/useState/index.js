import React from 'react';

function kepGenerator() {
  let obj = {};
  for (let i = 0; i < 10; i++) {
    obj["AAA-" + i] = (Math.random(0, 1) * 100).toFixed();
  }
  return obj;
}

function UseStateComponent() {
  const [input, setInput] = React.useState('');
  const [map, setMap] = React.useState(kepGenerator);

  console.log(map);
  return <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>;
}

export default UseStateComponent;