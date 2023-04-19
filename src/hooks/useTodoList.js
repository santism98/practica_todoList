import { useEffect, useReducer } from "react";
import { getLocal, setLocal} from '../helpers/local'
import { todoReducer } from "../reducers/todoReducer";


export const useTodoList = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], getLocal)
 
  useEffect(() => {

   setLocal(todos)

  }, [todos]);

  const handleNewTodo =  (data) => {

    const action = {

      type: "[TODO] add todo",

      payload: data,

    }

    dispatch(action)

  };


  const handleDeleteTodo = (id) => {
    
    const action = {

      type: "[TODO] delete todo",

      payload: id,

    }

    dispatch(action)
      
  }

  const handleToggleTodo = (id) => {
      
    const action = {

      type: "[TODO] toggle todo",

      payload: id

    }

    dispatch(action)
  }

  return {

    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo

  };
};





