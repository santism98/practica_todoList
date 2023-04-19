import { useEffect, useReducer } from "react";

import { todoReducer } from "../reducers/todoReducer";


const init = () => {

  const storedTodos = JSON.parse(localStorage.getItem("todos"));

};

export const useTodoList = () => {


  const [todos, dispatch] = useReducer(todoReducer, [], init)


  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);


  const addTodo = () => {

    const action = {

      type: "[TODO] add todo",

      payload: data,

    }

    dispatch(action)

  };



  return {

    todos,
    addTodo,

  };
};
