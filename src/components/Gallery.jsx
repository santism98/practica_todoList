import { Form } from "./Form"
import { Grid } from "./Grid"
import { useTodoList } from "../hooks/useTodoList"

export const Gallery = () => {

  const { todos, handleNewTodo} = useTodoList('')
  
     return (

        <>

            <h2 className="categoria text-left">Añadir Tarea</h2>

            <Form handleNewTodo={handleNewTodo}/>
            
            <Grid todos={todos} />

        </>

    )
}
