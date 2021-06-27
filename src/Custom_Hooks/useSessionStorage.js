import React from 'react';

export default function useSessionStorage(key, value) {
  // Store value in sessionStorage on initial load
  let [state, setState] = React.useState(() => {
    let storedValue = sessionStorage.getItem(key);
    if (storedValue) return storedValue;
    sessionStorage.setItem(key, value);
    return value;
  });

  // Update sessionStorage if value is updated
  React.useEffect(() => {
    sessionStorage.setItem(key, state);
  }, [state]);
  return [state, setState];
}