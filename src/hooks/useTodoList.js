import { useEffect, useReducer } from "react";

import { todoReducer } from "../reducers/todoReducer";

const setLocal = (todos) => {

  localStorage.setItem('todos', JSON.stringify(todos));

};

const getLocal = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];

};

export const useTodoList = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], getLocal)

  useEffect(() => {

   setLocal()

  }, [todos]);

  const handleNewTodo =  (data) => {

    const action = {

      type: "[TODO] add todo",

      payload: data,

    }

    dispatch(action)

  };


  const handleDeleteTodo = (id) => {
      
  }

  const handleToggleTodo = (id) => {
     
  }

  return {

    todos,
    handleNewTodo,

  };
};





