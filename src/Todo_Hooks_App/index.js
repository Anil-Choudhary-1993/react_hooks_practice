import React from 'react';
import { addTodo, completeTodo, deleteTodo } from './actions';
import reducer, { initialState } from './reducer';
import './index.css';

const TodoComponent = () => {
  const [input, setInput] = React.useState('');
  const [{ todos, count }, dispatch] = React.useReducer(reducer, initialState);

  const addTodoHandler = (e) => {
    const keyCode = e.which || e.keyCode || 0;
    if (keyCode === 13) {
      dispatch((addTodo(input.trim())));
      setInput('');
    }
  }

  console.log(todos);
  console.log('todo app rendering')

  return (
    <React.Fragment>
      <div className="todo_app">
        <div className="todo_app_title">Todo App</div>
        <div className="todo_app_count">Total Items : {count}</div>
        <input
          className="todo_app_input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={addTodoHandler}
        />
        <TodoItems
          todos={todos}
          dispatch={dispatch}
        />
      </div>
    </React.Fragment>
  )
}

const TodoItems = ({ todos, dispatch }) => {
  console.log('todo items rendering')
  return (
    <React.Fragment>
      {
        todos.map(todo => <TodoItem
          item={todo}
          dispatch={dispatch}
        />)
      }
    </React.Fragment>
  )
}

const TodoItem = ({ item, dispatch }) => {
  console.log('todo item rendering')

  return <div className="todo_item_container">
    <div
      key={item.name + item.id}
      className={`todo_item ${item.complete ? 'completed_todo_item' : ''}`}
      onClick={() => dispatch(completeTodo(item.id))}
    >
      {item.name}
    </div>
    <div
      className="delete_todo_item"
      onClick={() => dispatch(deleteTodo(item.id))}
    >
      X
    </div>
  </div>
}

export default TodoComponent;