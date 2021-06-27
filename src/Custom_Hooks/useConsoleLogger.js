import React from 'react';

export default function useConsoleLogger(key, value) {
  //Use ref to store old value
  const prevRef = React.useRef();
  React.useEffect(() => {
    console.log(`%c Variable ${key || '-'} value is updated to ${value || '-'} from ${prevRef.current || '-'}.`, 'background: #222; color: white');
    prevRef.current = value;
  }, [key, value]);
}