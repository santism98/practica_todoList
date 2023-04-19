import { Form } from "./Form"
import { Grid } from "./Grid"
import { useTodoList } from "../hooks/useTodoList"

export const Gallery = () => {

  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodoList('')
  
     return (

        <>
            <h2>Lista de tareas</h2>

            <h2 className="categoria text-left">Añadir Tarea</h2>

            <Form handleNewTodo={handleNewTodo}/>
            
            <Grid todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />

        </>

    )
}
