import React from 'react';

export default function useConsoleLogger(key, value) {
  React.useEffect(() => {
    console.log(`%c Variable ${key} value is updated to ${value}.`, 'background: #222; color: white');
  }, [key, value]);
}