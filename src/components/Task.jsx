export const Task = ({ task, description, id, done, handleDeleteTodo, handleToggleTodo }) => {

    let boton = ''

    if (done == true) {

        boton = 'FINALIZADO'

    } else {

        boton = 'PENDIENTE'

    }

    return (

        <>
            
            <div className="task flex self-left">

                <p>{task}</p>
                <p>{description}</p>

                <div className="flex self-right">

                    <button
                    className={done.toString()}
                    onClick={() => handleToggleTodo(id, done)}
                    >{`${boton}`}</button>
                    
                    <button
                    className="delete"
                    onClick={() => handleDeleteTodo(id)}
                    >Eliminar</button>

                </div>

            </div>

        </>
    )
}
