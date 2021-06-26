import React from 'react';

export default function useSessionStorage(key, value) {
  let [state, setState] = React.useState(() => {
    let storedValue = sessionStorage.getItem(key);
    if (storedValue) return storedValue;
    sessionStorage.setItem(key, value);
    return value;
  });
  React.useEffect(() => {
    sessionStorage.setItem(key, state);
  }, [state]);
  return [state, setState];
}