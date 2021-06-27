import React from 'react';

export default function useToggle(initialValue = false) {
  let [state, setState] = React.useState(initialValue);
  let setToggle = React.useCallback(() => {
    setState(prevValue => !prevValue);
  }, []);

  return [state, setToggle];
}