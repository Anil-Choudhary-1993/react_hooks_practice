import React from 'react';
import useFetch from '../Custom_Hooks/useFetch';

export default function UseFetchComponent() {
  const [input, setInput] = React.useState(1);
  let url = `https://jsonplaceholder.typicode.com/todos/${input}`,
    content = void 0;
  let [{ data, loading, error }] = useFetch(url);

  if (loading) {
    content = 'Loading';
  } else if (error) {
    content = error;
  } else if (data) {
    content = JSON.stringify(data, null, 2);
  } else {
    return 'No Result Found'
  }

  return (
    <React.Fragment>
      <input type="number" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <div style={{ fontSize: '24px', fontWeight: "bolder" }}>
        {content}
      </div>
    </React.Fragment>
  )
}