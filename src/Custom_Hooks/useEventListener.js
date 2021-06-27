import React from 'react';

export default function useEventListener(eventName, eventHandler = () => { }, element = window) {
  let eventRef = React.useRef([]);
  console.log(eventRef)

  // Update eventRef current if handler is updated
  React.useEffect(() => {
    eventRef.current = [...eventRef.current, eventHandler];
  }, [eventHandler]);

  // Check if element support and attach eventHandler to event
  React.useEffect(() => {
    //Check if element support adding listener
    const isListenerSupported = element && element.addEventListener;
    if (!isListenerSupported) return;

    // Attach event listener
    eventRef.current.map((listener) => {
      element.addEventListener(eventName, (event) => listener(event));
    })

    // Remove listener
    return () => eventRef.current.map((listener) => element.removeEventListener(eventName, listener));
  }, [eventName, element]);
}