import React from 'react';
import BasicHooksComponent from './Basic_React_Hooks';
import TodoComponent from './Todo_Hooks_App';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoComponent />
      </header>
    </div>
  );
}

export default App;
