

export const Task = ({task,description, id, done, handleDeleteTodo, handleToggleTodo}) => {
      
    return (

        <>

            <div className="task flex self-left">
                
                <p>{task}</p>
                <p>{description}</p>

                <div className="flex self-right">

                    <button
                    onClick={()=>handleToggleTodo(id,done)}
                    >Pendiente</button>


                    <button
                    onClick={()=>handleDeleteTodo(id)}
                    >Eliminar</button>

                </div>

            </div>

        </>

    )
}
