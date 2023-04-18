import { useState } from "react";


export const Form = () => {

    const [formulario, setFormulario] = useState('');



    const handleSubmit = (ev) => {

        ev.preventDefault()

        const data = ev.target.task.value

        setFormulario(data)
        //onNewTask(data)

    }

    const handleChange = ({ target }) => {

        const { name, value } = target

        if (formulario == '') return

        setFormulario({

            ...formulario,
            [name]: value
        })

    }



    return (
        <>

            <form onSubmit={handleSubmit}>

                <input

                    type="text"
                    placeholder="Tarea"
                    name="task"
                    onChange={handleChange}

                />

                <textarea

                    type="text"
                    placeholder="Descripcion"
                    name="description"
                    onChange={handleChange}

                />

                <input

                    type="submit"
                    value="Añadir tarea"

                />



            </form>

        </>


    )
}
