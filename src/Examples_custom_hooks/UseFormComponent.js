import React from 'react';
import useForm from '../Custom_Hooks/useForm';
import useConsoleLogger from '../Custom_Hooks/useConsoleLogger';

export default function UseFormComponent() {
  let [formFields, setFormFields] = useForm(['name', 'age']);
  useConsoleLogger('name', formFields.name);
  useConsoleLogger('age', formFields.age);

  return (
    <React.Fragment>
      Name: <input type="text" name="name" value={formFields.name} onChange={setFormFields} /> <br />
      Age: <input type="number" name="age" value={formFields.age} onChange={setFormFields} />
    </React.Fragment>
  )
}
