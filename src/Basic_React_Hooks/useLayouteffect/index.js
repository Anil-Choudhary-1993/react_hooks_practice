import React from 'react';

function UseStateComponent() {

  React.useEffect(() => {
    console.log('useEffect')
    return () => 'useEffect cleanup';
  }, []);

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect')
    return () => 'useLayoutEffect cleanup';
  }, []);

  return <div>Render{console.log('renders')}</div>
}

export default UseStateComponent;