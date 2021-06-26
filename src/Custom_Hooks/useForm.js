import React from 'react';

const useForm = (fields = []) => {
  let [state, setState] = React.useState(() => {
    return fields.reduce((obj, next, index) => {
      obj[next] = '';
      return obj;
    }, {})
  })
  const updateState = (e) => {
    setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }
  return [state, updateState];
}

export default useForm;