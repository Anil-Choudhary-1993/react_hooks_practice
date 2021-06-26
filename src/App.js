import React from 'react';
import BasicHooksComponent from './Basic_React_Hooks';
import TodoComponent from './Todo_Hooks_App';
import ExampleCustomHooks from './Examples_custom_hooks';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExampleCustomHooks />
      </header>
    </div>
  );
}

export default App;
