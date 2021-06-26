import React from 'react';

function UseMemoComponent() {
  let [count, setCount] = React.useState(0);
  const content = React.useMemo(() => {
    for (let i = 0; i < 1000000000; i++);
    return "Render complete";
  }, []);

  return <React.Fragment>
    <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
    {content}
  </React.Fragment>
}

export default UseMemoComponent;
