import React from 'react';
import useSessionStorage from '../Custom_Hooks/useSessionStorage';

export default function UseSessionStorageFormComponent() {
  let [name, setName] = useSessionStorage('name', 'Shiv');
  let [age, setAge] = useSessionStorage('age', 18);


  return (
    <React.Fragment>
      Name: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      Age: <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
    </React.Fragment>
  )
}
