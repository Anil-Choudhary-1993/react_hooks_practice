import React from 'react';

export default function useWhyDidUpdate(name = '', props = {}) {
  // Create Ref to store props
  let prevPropsRef = React.useRef();

  React.useEffect(() => {
    if (prevPropsRef.current) {
      // Combine all props keys;
      const allPropsKey = Object.keys({ ...prevPropsRef.current, ...props });

      // Create variable to store changed props and logs them
      const changedProps = [];
      allPropsKey.forEach((key, index) => {
        if (prevPropsRef.current[key] !== props[key]) {
          changedProps.push({
            propName: key,
            from: prevPropsRef.current[key],
            to: props[key]
          })
        }
      });

      if (changedProps.length > 0) {
        console.log("Component: ", name);
        console.log(changedProps);
      }
    }
    prevPropsRef.current = props;
  })
}