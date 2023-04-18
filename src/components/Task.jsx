

export const Task = ({task,description}) => {
    return (

        <>

            <div className="task flex">

                <p>{task}</p>
                <p>{description}</p>

                <div className="flex self-right">

                    <button>boton1</button>
                    <button>Eliminar</button>

                </div>

            </div>

        </>

    )
}
