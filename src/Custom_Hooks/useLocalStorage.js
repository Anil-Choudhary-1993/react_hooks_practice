import React from 'react';

export default function useLocalStorage(key, value) {
  // Store value in localStorage on initial load
  let [state, setState] = React.useState(() => {
    let storedValue = localStorage.getItem(key);
    if (storedValue) return storedValue;
    localStorage.setItem(key, value);
    return value;
  });

  // Update localStorage if value is updated
  React.useEffect(() => {
    localStorage.setItem(key, state);
  }, [state]);
  return [state, setState];
}