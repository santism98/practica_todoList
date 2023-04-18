import { useState, useEffect } from "react";

import { todoReducer } from "../../reducers/todoReducer";

export const useTodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (data) => {
    setTodos((prevTodos) =>
      todoReducer(prevTodos, {
        type: "[TODO] add todo",
        payload: {
         
          task: data.task,
          description: data.description,
          done: false,
          date: new Date(),
        },
      })
    );
  };

 

  return {
    todos,
    addTodo,
   
  };
};
