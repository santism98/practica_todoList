import { Task } from "./Task"

export const Grid = ({todos, handleDeleteTodo, handleToggleTodo}) => {

   
    return (

        <>

            <h2 className="categoria text-left"> PRUEBA</h2>

            <div className="divTask">

                {todos.map((task) => (

                    <Task key={task.id} {...task} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo}/>

                ))
                }

            </div>

        </>

    )
}
