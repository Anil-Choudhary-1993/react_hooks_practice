import React from 'react';
import useForm from '../Custom_Hooks/useForm';
import useConsoleLogger from '../Custom_Hooks/useConsoleLogger';
import useToggle from '../Custom_Hooks/useToggle';
import useMemoCompare from '../Custom_Hooks/useMemoCompare';
import useEventListener from '../Custom_Hooks/useEventListener';

export default function UseFormComponent() {
  let [formFields, setFormFields] = useForm(['name', 'age']);
  let [toggle, setToggle] = useToggle(false);

  // Use custom console logger to console all changes on prop 
  useConsoleLogger('name', formFields.name);
  useConsoleLogger('age', formFields.age);

  // Use Memo compare hook to log when prop of object gets update
  React.useEffect(() => {
    console.log(`%c ${formFields.name} + ' is updated`, `background: #222; color: white`);
  }, [useMemoCompare(formFields, (prev, next) => prev && prev.name === next.name)]);

  // Attaching event listener on window to check mouse position
  useEventListener(
    'mousemove',
    (event) => {
      console.log(`%c ${event.clientX} - ${event.clientY} + ' is updated`, `background: #222; color: white`);
    },
    window
  );

  return (
    <React.Fragment>
      Name: <input type="text" name="name" value={formFields.name} onChange={setFormFields} /> <br />
      Age: <input type="number" name="age" value={formFields.age} onChange={setFormFields} /> <br />
      <input type="checkbox" value={toggle} onChange={setToggle} /> I accept the license agreement.
    </React.Fragment>
  )
}
