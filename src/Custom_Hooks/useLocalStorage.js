import React from 'react';

export default function useLocalStorage(key, value) {
  let [state, setState] = React.useState(() => {
    let storedValue = localStorage.getItem(key);
    if (storedValue) return storedValue;
    localStorage.setItem(key, value);
    return value;
  });
  React.useEffect(() => {
    localStorage.setItem(key, state);
  }, [state]);
  return [state, setState];
}