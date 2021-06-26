import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './types';

export const initialState = {
  todos: [],
  count: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos, {
            id: state.count + 1,
            name: action.payload,
            complete: false
          }
        ],
        count: state.count + 1
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.complete = !todo.complete;
          }
          return todo;
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
        count: state.count - 1
      }
    default:
      return state;
  }
}