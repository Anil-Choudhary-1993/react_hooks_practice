import React from 'react';

function UseEffectComponent() {
  const [data, setData] = React.useState({});
  const [input, setInput] = React.useState(1);

  React.useEffect(() => {
    console.log("Calling UseEffect")
    fetch(`https://jsonplaceholder.typicode.com/todos/${input}`)
      .then(resp => resp.json())
      .then(resp => setData(resp))
      .catch(err => console.log(err));
      return () => console.log('Unmount useEffect');
  }, [input]);

  return (
    <React.Fragment>
      <input type="number" value={input} onChange={(e) => setInput(e.target.value)}></input>
      {JSON.stringify(data, null, 5)}
    </React.Fragment>
  )

}

export default UseEffectComponent;