import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './types';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
})