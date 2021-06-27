import React from 'react';

export default function useMemoCompare(nextValue, compareFunc) {
  //Ref for storing old ref
  let prevRef = React.useRef(),
    prevValue = prevRef.current;

  // Pass prev and next value to determine value is updated
  let isEqual = compareFunc(prevValue, nextValue);

  // Update prev ref if value if updated
  React.useState(() => {
    if (!isEqual) {
      prevRef.current = nextValue;
    }
  })
  return isEqual ? prevValue : nextValue;
}