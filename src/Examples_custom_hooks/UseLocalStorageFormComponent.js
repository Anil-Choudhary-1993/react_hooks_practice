import React from 'react';
import useLocalStorage from '../Custom_Hooks/useLocalStorage';

export default function UseLocalStorageFormComponent() {
  let [name, setName] = useLocalStorage('name', 'Shiv');
  let [age, setAge] = useLocalStorage('age', 18);


  return (
    <React.Fragment>
      Name: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      Age: <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
    </React.Fragment>
  )
}
